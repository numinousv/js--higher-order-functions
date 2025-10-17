# 🤖 JavaScript i praktiken - Higher order functions och loopar

En samling problem att lösa med hjälp av higher order functions och loopar. Övningarna är uppdelade i ett flertal .js-filer. Testerna körs med hjälp av `test`-skriptet. Ta hjälp av dessa för att kontrollera dina lösningar. Du kan också titta på ett tests `toBe`- eller `toEquals`-metod om du är osäker på vad det förväntade resultatet är.

## 👥 Utförande

Det går fint att göra dessa uppgifter själv. Om man känner sig osäker på koncepten är parprogrammering ett utmärkt alternativ. Det vill säga att ni jobbar på en dator två och två för att tillsammans lista ut lösningarna.

## 🧑‍🔧 Så kör du unit tests (NPM & Vitest)

### Intallera dependencies

Projektet har bara en "dev dependency" - testbiblioteket Vitest. Följ instruktionerna nedan för att köra testen och kontrollera att dina lösningar ger önskat utfall.

- Öppna terminalen (Exempelvis direkt i din IDE)
- Se till att du är i mappen för detta projekt
- Installera dependencies

```bash
npm install
```

### Test-kommandon

- Kör alla tester(watch-läge):

```bash
npm run test
```

- Kör en enskild testfil (watch-läge):

```bash
npm run test loops - eller vad filnamnet kan tänkas vara. Det ska inte vara nödvändigt att ange path. Vitest bör kunna leta igenom hela projektet och hitta alla test-filer med "loops" i namnet i det här fallet.
```

- Tryck `q`eller `ctrl + c`för att ta dig ur watch-läge och avbryta testandet

#### "npm"-kommandot kräver att man har installerat Node

#### "Watch-läge" betyder att testerna körs om efter att du sparat dina ändringar

## 💡 Tips

Filstrukturen under `tests/` speglar dina lösningsfiler. De kan ge mer klarhet i vad det önskade utfallet är. Fixa variablerna och funktionerna tills testerna blir gröna ✅.
