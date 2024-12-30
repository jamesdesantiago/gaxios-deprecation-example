const { google } = require('googleapis');

async function testGaxios() {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const authClient = await auth.getClient();
  const projectId = await auth.getProjectId();

  const res = await authClient.request({
    url: `https://cloudresourcemanager.googleapis.com/v1/projects/${projectId}`,
  });

  console.log(res.data);
}

testGaxios().catch(console.error);
