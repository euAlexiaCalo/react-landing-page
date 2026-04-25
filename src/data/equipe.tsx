export interface Membro {
    id: number;
    name: string;
    position: string;
    description: string;
    bgColor?: string;
    textColor?: string;
}

export const equipe: Membro[] = [
    {
        id: 1,
        name: "André Luz",
        position: "CEO & Fundador",
        description: "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
        bgColor: "#DBE1FF",
        textColor: "#004AC6"
    },
    {
        id: 2,
        name: "Carla Mendes",
        position: "CTO",
        description: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
        bgColor: "#DCE9FF",
        textColor: "#465780"
    },
    {
        id: 3,
        name: "Paulo Neto",
        position: "Head de Produto",
        description: "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
        bgColor: "#FFB59C",
        textColor: "#380C00"
    },
    {
        id: 4,
        name: "Rita Costa",
        position: "Sucesso do Cliente",
        description: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
        bgColor: "#D9E2FF",
        textColor: "#051A40"
    }
]