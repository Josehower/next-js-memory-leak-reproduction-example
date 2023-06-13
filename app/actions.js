'use server';

import autocannon from 'autocannon';

export async function fireCannon() {
  console.log('fire!');
  async function foo(url) {
    const result = autocannon({
      url,
      connections: 40, //default
      pipelining: 1, // default
      duration: 50, // default)
      workers: 4,
    });
    console.log(url);
  }
  console.log('fire!');
  await Promise.race([
    foo('http://localhost:3000/page3'),
    foo('http://localhost:3000/page4'),
    foo('http://localhost:3000/page2'),
    foo('http://localhost:3000'),
  ]);
}
