export interface IUserInfo {
    nome: string;
    imagem: string;
    percentual: number;
    limiteXp: number;
    nivel?: number;
}

export interface IProgress {
    percentual: number;
}