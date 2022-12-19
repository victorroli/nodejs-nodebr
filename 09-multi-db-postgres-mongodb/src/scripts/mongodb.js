//  docker ps `
//  docker exec -it 55ea432214df `
//  mongo -u victoroliveira -p minhasenha --authenticationDatabase herois

db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
});

for (let i = 0; i < 100; i++) {
  db.herois.insert({
    nome: `Clone=${i}`,
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
  });
}

db.herois.count();
db.herois.findOne();
db.herois.find().limit(50).sort({ nome: -1 });
db.herois.find({}, { poder: 1, _id: 0 });

// Commands

// create
db.herois.insert({
  nome: `Clone=${i}`,
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
});

// read
db.herois.find();

db.herois.findOne({ nome: 'Flash' });

// update
db.herois.update(
  { _id: ObjectId('63a0b7a51de7e0cbbcdd519d') },
  { nome: 'Mulher Maravilha' }
);

db.herois.update(
  { _id: ObjectId('63a0b8fb1de7e0cbbcdd51d5') },
  { $set: { nome: 'Lanterna Verde' } }
);

db.herois.remove({});
