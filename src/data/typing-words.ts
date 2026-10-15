// typing-words.ts: the word lists for the typing test (/keyboards/typing-test).
// Both lists were written for Build Play Collect. Add or remove words freely:
// one word per entry, lowercase, letters only (no spaces).

// Everyday words: common English words about daily life, good for a fair speed test.
// This is the default list. Duplicates are dropped automatically.
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
morning evening today tomorrow yesterday week month weekend summer winter spring autumn rain sun cloud wind snow storm warm cold hot cool bright dark quiet loud soft fast slow early late happy sad funny brave kind calm busy lazy proud lucky tired hungry thirsty sleepy
friend family brother sister baby uncle aunt cousin neighbor teacher student doctor nurse driver farmer cook artist singer player writer reader worker parent child person
room door window wall floor roof kitchen garden street road bridge park market shop store office bank hotel library hospital station airport beach island forest mountain hill valley lake field farm village town
table chair bed desk lamp clock phone screen bag box bottle cup glass plate spoon fork knife pen pencil shirt shoe hat coat dress sock ticket money coin wallet key map gift letter photo
bread rice egg milk cheese butter sugar salt fruit apple banana orange lemon grape mango soup salad noodle chicken fish meat cake cookie candy coffee tea juice dinner lunch breakfast snack
dog cat bird horse cow pig sheep duck rabbit mouse lion tiger bear monkey snake frog bee ant butterfly whale shark turtle
red blue green yellow purple pink brown black gray gold silver
run jump swim walk climb dance sing laugh smile cry shout whisper sleep wake sit stand fall fly drive ride push pull throw catch kick hold drop lift carry fix break clean cook wash brush paint draw build
think know feel hope wish dream plan decide choose remember forget believe guess wonder understand explain agree argue promise allow refuse accept enjoy hate love miss share borrow lend pay spend save buy sell
open close begin finish arrive leave enter return follow lead win lose count measure compare test check share send receive bring fetch wait hurry rest relax visit travel explore discover invent create
easy simple quick clear true false real fresh clean dirty empty full heavy light rich poor safe strong weak sharp smooth rough sweet sour bitter loud wide narrow deep shallow tall short young new ancient
always never often seldom usually maybe perhaps quite rather almost already soon later still yet again together apart inside outside upstairs downstairs nearby everywhere somewhere nowhere
question answer problem reason result chance choice moment minute hour second piece part whole side corner middle edge center level step stage plan goal rule habit skill power energy force
music song movie show game sport team club party holiday trip journey adventure secret surprise mistake lesson practice exercise contest prize medal trophy
computer internet website message email video camera picture sound voice signal button cable battery charger screen mouse window folder file program
history science nature language number shape circle square triangle line point space planet star moon sky ocean river stone sand wood metal paper glass plastic fire smoke
because although unless while since though whether either neither both each every several plenty enough few many much more less most least
`.trim().split(/\s+/).filter((w, i, all) => all.indexOf(w) === i);

// Hobby words: the stuff we write about. Spinning tops, cars, switches, cards, consoles and esports.
export const HOBBY = `
beyblade blade ratchet bit stadium launcher spin burst xtreme dash attack defense stamina
balance combo tournament bracket champion tamiya chassis motor roller gear battery lap track
corner speed tune kit decal keyboard switch keycap linear tactile clicky lube spring stem
plate gasket foam thock clack creamy marbly poppy layout hotswap stabilizer typing card deck
booster pack singles rare foil holo draft meta ban sleeve binder trade collect console
controller handheld cartridge pixel retro arcade save level boss quest respawn esports team
captain draft lane carry support jungle patch match clutch stream highlight hobby build play
`.trim().split(/\s+/).filter((w, i, all) => all.indexOf(w) === i);
