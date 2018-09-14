const docgen = require("solidity-docgen").default
docgen('./node_modules/zap_contracts', "./node_modules/zap_contracts/contracts","./doc",["lib","Migration.sol","token"])
