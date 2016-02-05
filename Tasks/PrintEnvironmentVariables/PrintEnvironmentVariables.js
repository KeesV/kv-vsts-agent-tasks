var tl = require('vso-task-lib');

tl.debug("Printing all environment variables...");
for(var key in process.env)
{
    console.log(key + ": " + process.env[key]);
}
tl.setResult(tl.TaskResult.Succeeded, "All environment variables printed!");
