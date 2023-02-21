import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { diamond } = deployments

  const namedAccounts = await getNamedAccounts()
  await diamond.deploy('DiamondHello', {
    from: namedAccounts.deployer,
    owner: namedAccounts.deployer,
    facets: ['Hello'],
    log: true,
  })
}
export default func
func.tags = ['DiamondHello']
