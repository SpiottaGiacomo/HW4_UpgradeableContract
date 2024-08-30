// SPDX-License-Identifier: MIT 
pragma solidity ^0.8;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./Token2Storage.sol";

contract Token2 is ERC20Upgradeable, OwnableUpgradeable, Token2Storage {

    function initialize(string memory _tokenName, string memory _tokenSymbol, uint256 _supply) public initializer() {
        __ERC20_init_unchained(_tokenName, _tokenSymbol);
        __Ownable_init_unchained(msg.sender);

        _mint(msg.sender, _supply*(1e18));
    }

    function setMaxSupply(uint256 _max) external onlyOwner{
        require(_max * 1e18 >= totalSupply(), "max supply less than total supply");
        maxSupply = _max * 1e18;
    }

    function setVersion(uint8 _ver) external{
        VERSION = _ver;
    }
}