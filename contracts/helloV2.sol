// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

library HelloV2Storage {
    bytes32 public constant STORAGE_SLOT = keccak256('hello.storage');

    struct Layout {
        string content;
        string name;
    }

    function layout() internal pure returns (Layout storage lay) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
        lay.slot := slot
        }
    }

    function setContent(string memory content,string memory name) external {
        layout().content = content;
        layout().name = name;
    }

    function getContent() external view returns(string memory,string memory) {
        return (layout().content, layout().name);
    }
}

contract Hello {
    function setContent(string memory content,string memory name) external {
        HelloV2Storage.setContent(content,name);
    }
    
    function say() external view returns(string memory){
        (string memory content,string memory name) =  HelloV2Storage.getContent();
        return string(abi.encodePacked(content,',',name));
    }
}