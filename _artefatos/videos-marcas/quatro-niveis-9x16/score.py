import sys; sys.path.insert(0, "/Users/Lucas-Lenovo/.claude/skills/onetake/scripts")
from sfx_palette import Score, air, glass, wood, sub
s=Score(dur=19.0); p=s.place
for t,f in ((0.3,392),(0.7,494)): p(glass(f,0.9,0.5),t,0.14,0.0,0.5)
for t,f in zip((3.0,5.4,7.8,10.2),(523,587,659,784)): p(air(0.35,300,2400,1.3,0.4),t-0.15,0.22,0.0,0.4); p(sub(62,0.6),t+0.08,0.18,0.0,0.3); p(glass(f,0.9,0.7),t+0.2,0.12,0.0,0.45)
p(air(0.6,200,2000,1.2,0.5),12.8,0.28,0.0,0.5); p(glass(523,1.4,0.5),13.1,0.10,0.0,0.6); p(glass(784,1.6,0.4),13.12,0.08,0.0,0.6)
p(air(0.5,200,1800,1.2,0.5),14.95,0.3,0.0,0.5); p(sub(55,0.8),15.6,0.2,0.0,0.4); p(glass(659,1.8,0.5),16.3,0.12,0.0,0.6); p(glass(988,1.8,0.4),16.32,0.09,0.0,0.6)
s.write("sfx.wav")
