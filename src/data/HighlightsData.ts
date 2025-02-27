import { highlightsType } from "@/types/Highlights";

// Imagens dos destaques do Ryan
import zelda from "@/assets/characters/ryan/highlights/zelda.webp";
import minecraft from "@/assets/characters/ryan/highlights/minecraft.webp";
import bloodborne from "@/assets/characters/ryan/highlights/bloodborne.jpg";
import tlou2 from "@/assets/characters/ryan/highlights/tlou2.webp";
import rdr2 from "@/assets/characters/ryan/highlights/rdr2.webp";
import bioshockInfinite from "@/assets/characters/ryan/highlights/bioshock-infinite.jpg";
import hollowKnight from "@/assets/characters/ryan/highlights/hollow-knight.jpg";
import celeste from "@/assets/characters/ryan/highlights/celeste.jpg";
import undertale from "@/assets/characters/ryan/highlights/undertale.jpg";

// Destaques do Ryan
const highlightsRyan: highlightsType = {
    id: "1",
    userId: "1",
    content: [
        {
            id: 1,
            title: "🎮 Platinei isso!",
            posts: [
                {
                    text: "Depois de 120 horas explorando Hyrule, finalmente derrotei Ganon. Que jornada incrível! 🗡️✨ #PlatineiIsso #Zelda",
                    image: zelda,
                },
                {
                    text: "Cavar até o bedrock com uma pá de diamante foi mais difícil do que parece. Valeu a pena pelo troféu! ⛏️💎 #PlatineiIsso #Minecraft",
                    image: minecraft,
                },
                {
                    text: "Depois de morrer incontáveis vezes, finalmente platinei Bloodborne. Esse jogo é uma obra-prima! 🩸🌙 #PlatineiIsso #Bloodborne",
                    image: bloodborne,
                },
            ],
        },
        {
            id: 2,
            title: "🚨 Cuidado com spoilers!",
            posts: [
                {
                    text: "O final de TLOU2 me deixou sem palavras. Alguém mais ainda está processando? 🧠💔 #CuidadoComSpoilers #TLOU2 #Depressão",
                    image: tlou2,
                },
                {
                    text: "O arco do Arthur é uma das melhores histórias que já vi em um jogo. Que personagem incrível! 🤠🌅 #CuidadoComSpoilers #RDR2",
                    image: rdr2,
                },
                {
                    text: "O final de Bioshock Infinite mudou minha visão sobre narrativas em jogos. Alguém mais ficou de queixo caído? 🎢🌀 #CuidadoComSpoilers #Bioshock #BioshockInfinite",
                    image: bioshockInfinite,
                },
            ],
        },
        {
            id: 3,
            title: "🕹️ Melhores jogos indie",
            posts: [
                {
                    text: "Hollow Knight é uma obra-prima indie. A atmosfera, a trilha sonora e o combate são perfeitos. 🐞⚔️ #MelhoresJogosIndie #HollowKnight",
                    image: hollowKnight,
                },
                {
                    text: "Celeste é mais do que um jogo de plataforma; é uma lição de superação. A história me emocionou demais. 🏔️💖 #MelhoresJogosIndie #Celeste",
                    image: celeste,
                },
                {
                    text: "Undertale me surpreendeu com sua narrativa e escolhas que realmente importam. Joguem sem spoilers! 💀🌟 #MelhoresJogosIndie #Undertale",
                    image: undertale,
                },
            ],
        },
    ],
};

// Lista de destaques disponíveis
export const highlightsData: highlightsType[] = [highlightsRyan];