export default () => ({
  serviceVersion: 'v1',
  serviceName: 'template',
  port: parseInt(process.env.PORT, 10) || 4010,
});
