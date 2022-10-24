function objFactory(library, orders) {
    let objects = [];
    for (const order of orders) {
        const current = Object.assign({}, order.template);
        for (const part of order.parts) {
            current[part] = library[part];
        }
        objects.push(current);
    }
    return objects;
}

objFactory({
    doA: () => { /* … */ },
    doB: () => { /* … */ },
    doC: () => { /* … */ }
  },
  [
    { template: { id: 'first' },
      parts: [ 'doB' ] },
    { template: { id: 'second' },
      parts: [ 'doA', 'doC' ] }
  ]
  )