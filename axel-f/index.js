cpm(117/4)
var treble =  note(`
<
  [f3@4 a3@3 f3@2 f3 b3@2 f3@2 e3@2]
  [f3@4 c4@3 f3@2 f3 d4@2 c4@2 a3@2]
  [f3@2 c4@2 f4@2 f3 e3@2 e3 c3@2 g3@2 f3@2]
  [f3 ~]
>
`).sound("sawtooth").transpose(12).clip(.5).lpf(700)

var bass = note(`<
  [f3@4 f4@3 e3@2 e4 c3@2 c4@2 e3@2 ]
  [f3@4 f4@3  ~@2 c3 c4@2 e4@2 f4@2]
  [d3@4 d4@3 e3@2 e4 c3@2 c4@2 e3@2]
  [f3@4 ~@4 ~ f34 c4@2 b3@2 a3@2]
>`).sound("gm_electric_bass_finger").transpose(-24)

$: arrange(
  [8, bass],
  [8, treble],
  [8 , stack(treble, bass)]
)


