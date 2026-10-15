// typing-words.ts: the word lists for the typing test (/keyboards/typing-test).
// Both lists were written for Build Play Collect. Add or remove words freely:
// one word per entry, lowercase, letters only (no spaces).

// Everyday words: short, common English words, good for a fair speed test.
export const EVERYDAY = `
the and you that was for are with his they one have this from had not but what all were
when your can said there use each which she how their will other about out many then them
these some her would make like him into time has look two more write see number way could
people than first water been call who oil its now find long down day did get come made may
part over new sound take only little work know place year live back give most very after
thing our just name good great where help through much before line right too mean old any
same tell boy follow came want show also around form three small set put end does another
well large must big even such because turn here why ask went men read need land different
home move try kind hand picture again change off play spell air away animal house point page
letter mother answer found study still learn should world high every near add food between
own below country plant last school father keep tree never start city earth eye light thought
head under story saw left few while along might close something seem next hard open example
begin life always those both paper together got group often run important until children side
feet car mile night walk white sea began grow took river four carry state once book hear stop
without second later miss idea enough eat face watch far really almost let above girl sometimes
`.trim().split(/\s+/);

// Hobby words: the stuff we write about. Spinning tops, cars, switches, cards, consoles and esports.
export const HOBBY = `
beyblade blade ratchet bit stadium launcher spin burst xtreme dash attack defense stamina
balance combo tournament bracket champion tamiya chassis motor roller gear battery lap track
corner speed tune kit decal keyboard switch keycap linear tactile clicky lube spring stem
plate gasket foam thock clack creamy marbly poppy layout hotswap stabilizer typing card deck
booster pack singles rare foil holo draft meta ban sleeve binder trade collect console
controller handheld cartridge pixel retro arcade save level boss quest respawn esports team
captain draft lane carry support jungle patch match clutch stream highlight hobby build play
`.trim().split(/\s+/);
