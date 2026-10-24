import assert from 'node:assert/strict';
import { createRegistryClient } from '@x12i/ai-registry-client';

const client = createRegistryClient({ baseUrl: 'https://registry.example.invalid', fetch: async (url, init) => {
  assert.equal(new URL(url).pathname, '/v1/datasets/demo');
  assert.equal(init.method, 'GET');
  return Response.json({ version: 'fixture-1', models: [{ id: 'demo/model', lane: 'text' }] });
} });
const dataset = await client.dataset('demo');
assert.equal(dataset.models[0].lane, 'text');
console.log(dataset);
// The dataset is an explicit HTTP fixture, not a current hosted registry response.
