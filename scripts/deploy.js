// scripts/deploy.js
const { deployTask } = require('@_koii/sdk');

async function main() {
    const config = {
        name: 'rwa-verification',
        taskId: 'your-task-id',
        node: 'https://testnet.koii.network'
    };

    await deployTask(config);
    console.log('Task deployed successfully');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
