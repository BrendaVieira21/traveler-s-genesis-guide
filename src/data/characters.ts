export type Element = "Pyro" | "Hydro" | "Electro" | "Cryo" | "Dendro" | "Anemo" | "Geo";
export type Region = "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru";

export interface Character {
  id: string;
  name: string;
  rarity: 4 | 5;
  element: Element;
  weapon: string;
  region: Region;
  description: string;
  image: string;
}

export const elementColors: Record<Element, string> = {
  Pyro: "bg-red-500/20 text-red-400 border-red-500/30",
  Hydro: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Electro: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Cryo: "bg-cyan-300/20 text-cyan-300 border-cyan-300/30",
  Dendro: "bg-green-500/20 text-green-400 border-green-500/30",
  Anemo: "bg-teal-400/20 text-teal-300 border-teal-400/30",
  Geo: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export const elementGlow: Record<Element, string> = {
  Pyro: "shadow-red-500/20",
  Hydro: "shadow-blue-500/20",
  Electro: "shadow-purple-500/20",
  Cryo: "shadow-cyan-300/20",
  Dendro: "shadow-green-500/20",
  Anemo: "shadow-teal-400/20",
  Geo: "shadow-amber-500/20",
};

export const characters: Character[] = [
  {
    id: "raiden-shogun",
    name: "Raiden Shogun",
    rarity: 5,
    element: "Electro",
    weapon: "Lança",
    region: "Inazuma",
    description:
      "A Arconte Electro de Inazuma que busca a eternidade. Sua Burst Elemental libera uma devastadora sequência de cortes com sua lâmina da consciência, restaurando energia para toda a equipe.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Shougun.png",
  },
  {
    id: "zhongli",
    name: "Zhongli",
    rarity: 5,
    element: "Geo",
    weapon: "Lança",
    region: "Liyue",
    description:
      "O ex-Arconte Geo e consultor da Funerária Wangsheng. Cria o escudo mais resistente do jogo com seu Pilar de Pedra e petrifica inimigos com seu meteoro devastador.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Zhongli.png",
  },
  {
    id: "hu-tao",
    name: "Hu Tao",
    rarity: 5,
    element: "Pyro",
    weapon: "Lança",
    region: "Liyue",
    description:
      "A 77ª Diretora da Funerária Wangsheng. Sacrifica HP para infundir seus ataques com Pyro, causando dano massivo. Quanto menor sua vida, mais poderosa ela se torna.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Hutao.png",
  },
  {
    id: "kazuha",
    name: "Kaedehara Kazuha",
    rarity: 5,
    element: "Anemo",
    weapon: "Espada",
    region: "Inazuma",
    description:
      "Um espadachim errante de Inazuma com habilidade em poesia. Seu salto elemental puxa inimigos e absorve elementos, criando devastadoras reações elementais em cadeia.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Kazuha.png",
  },
  {
    id: "nahida",
    name: "Nahida",
    rarity: 5,
    element: "Dendro",
    weapon: "Catalisador",
    region: "Sumeru",
    description:
      "A Arconte Dendro, conhecida como a Menor Lorde Kusanali. Conecta-se à consciência dos inimigos, espalhando marcas Dendro que causam dano contínuo e amplificam reações.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Nahida.png",
  },
  {
    id: "venti",
    name: "Venti",
    rarity: 5,
    element: "Anemo",
    weapon: "Arco",
    region: "Mondstadt",
    description:
      "O bardo livre de Mondstadt e verdadeiro Arconte Anemo, Barbatos. Cria um enorme vórtice que suga e arremessa inimigos, sendo o rei do controle de grupo.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Venti.png",
  },
  {
    id: "ayaka",
    name: "Kamisato Ayaka",
    rarity: 5,
    element: "Cryo",
    weapon: "Espada",
    region: "Inazuma",
    description:
      "A filha mais velha do Clã Kamisato de Inazuma. Sua lâmina gélida corta com elegância, e sua Burst dispara uma tempestade de gelo que persegue e congela tudo em seu caminho.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ayaka.png",
  },
  {
    id: "ganyu",
    name: "Ganyu",
    rarity: 5,
    element: "Cryo",
    weapon: "Arco",
    region: "Liyue",
    description:
      "Secretária da Qixing de Liyue, meio-adeptus. Seus tiros carregados de gelo causam dano AoE devastador, fazendo dela uma das maiores DPS à distância do jogo.",
    image: "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ganyu.png",
  },
];

export const regions: Region[] = ["Mondstadt", "Liyue", "Inazuma", "Sumeru"];
