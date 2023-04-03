// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Creator {
    address payable public owner;
    Hitch[] public hitches;
    event LogAddress(address _address);

    constructor() {
        owner = payable(msg.sender);
    }

    function createHitch(string calldata _hitchTime, string calldata _cost, string calldata _pickup, string calldata _destination, string calldata _selectedRide) external payable {
        require(msg.value != 0);
        
        Hitch newHitch = (new Hitch){value: msg.value * 97/100}(msg.sender, _cost, _hitchTime, _pickup, _destination, _selectedRide, owner); // 3% to rewards pool, if rider cancel ride 3% is taken as the cancellation fee and rider only get back 97%
        hitches.push(newHitch);
        address newHitchAddress = address(newHitch);
        emit LogAddress(newHitchAddress);
    }

    function getDeployedRides() public view returns (Hitch[] memory) {
        return hitches;
    }

    function claimReward(uint _points, uint _totalpoints) public {
        require(_points > 0, "You are not eligible to claim reward.");

        uint rewardEarned = address(this).balance * _points/_totalpoints;
        payable(msg.sender).transfer(rewardEarned);
    }
}

contract Hitch {
    address payable public rider;
    address payable public driver;
    address payable public owner;
    string public cost;
    string public hitchTime;
    string public pickup;
    string public destination;
    string public selectedRide;


    enum State {Created, Matched, Ongoing, Ended, Cancelled}
    State public hitchState;

    constructor(address _rider, string memory _cost, string memory _hitchTime, string memory _pickup, string memory _destination, string memory _selectedRide, address _owner) payable {
        owner = payable(_owner);
        rider = payable(_rider);
        hitchState = State.Created;
        cost = _cost; 
        hitchTime = _hitchTime;
        pickup = _pickup;
        destination = _destination;
        selectedRide = _selectedRide;
    }

    modifier onlyDriver() {
        require(msg.sender == driver);
        _;
    }

    modifier onlyRider() {
        require(msg.sender == rider);
        _;
    }

    modifier driverOrRider() {
        require(msg.sender == driver || msg.sender == rider);
        _;
    }
    
    function acceptHitch() public payable {
        require(msg.sender != rider);
        require(hitchState == State.Created, "Hitch no longer available!");

        hitchState = State.Matched;
        driver = payable(msg.sender);
    }

    function startHitch() public onlyDriver {
        hitchState = State.Ongoing;
    }

    function endHitch() public onlyDriver {
        require(hitchState == State.Ongoing);
        
        uint rideCost = address(this).balance * 99/100; 
        uint ownerReward = address(this).balance - rideCost;

        // transfer 99% of 97% of the cost to driver
        driver.transfer(rideCost);

        // reward owner with remaining
        owner.transfer(ownerReward);
        
        hitchState = State.Ended;
    }

    function driverCancel() public onlyDriver {
        require(hitchState == State.Matched);

        // Return state of ride back to created
        hitchState = State.Created;
        driver = payable(address(0));
    }

    function riderCancel() public onlyRider {
        require(hitchState == State.Created || hitchState == State.Matched);

        // Return rider cost
        rider.transfer(address(this).balance);

        // Update state of ride to cancelled
        hitchState = State.Cancelled;
    }

}
