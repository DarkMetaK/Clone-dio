export interface IUserInfo {
    nome: string;
    imagem: string | React.ReactNode;
    percentual: number;
    limiteXp: number;
    nivel?: number;
}

export interface IProgress {
    percentual: number;
}