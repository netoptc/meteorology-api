import { SetupServer } from '@src/server';
import supertest from 'supertest';
import TestAgent from 'supertest/lib/agent';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
TestAgent<supertest.Test>;
