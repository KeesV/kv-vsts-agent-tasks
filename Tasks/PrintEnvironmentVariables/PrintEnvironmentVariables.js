var tl = require('vsts-task-lib/task');

tl.debug("Printing all environment variables...");
for(var key in process.env)
{
    console.log(key + ": " + process.env[key]);
}
tl.setResult(tl.TaskResult.Succeeded, "All environment variables printed!");
