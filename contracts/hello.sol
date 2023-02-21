// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

library HelloStorage {
    bytes32 public constant STORAGE_SLOT = keccak256('hello.storage');

    struct Layout {
        string content;
    }

    function layout() internal pure returns (Layout storage lay) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
        lay.slot := slot
        }
    }

    function setContent(string memory content_) external {
        layout().content = content_;
    }

    function getContent() external view returns(string memory) {
        return layout().content;
    }
}

contract Hello {
    function setContent(string memory content_) external {
        HelloStorage.setContent(content_);
    }
    function say() external view returns(string memory){
        return HelloStorage.getContent();
    }
}