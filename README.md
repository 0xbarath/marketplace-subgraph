### Build

To build the project

```bash
graph codegen
graph build
graph deploy --studio <subgraph-name>
```


To deploy new version of the subgraph for new Indentura contracts do the following:

1. Update the `subgraph.yaml` file with the new contract addresses
2. update the block number in the `subgraph.yaml` file
3. build and deploy the subgraph
