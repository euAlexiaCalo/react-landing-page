import IconFoco from "../assets/iconsSobre/iconFoco.png";
import IconDados from "../assets/iconsSobre/iconDados.png";
import IconIntegracao from "../assets/iconsSobre/iconIntegracao.png";
import IconSeguranca from "../assets/iconsSobre/iconSeguranca.png";

export interface Pilar {
    id: number;
    icon: string;
    alt: string;
    title: string;
    description: string;
}

export const pilares: Pilar[] = [
    {
        id: 1,
        icon: IconFoco,
        alt: "Ícone de braço robótico articulado",
        title: "Foco Técnico",
        description: "Módulos específicos para laboratórios e oficinas."
    },
    {
        id: 2,
        icon: IconDados,
        alt: "Ícone de gráfico de barras",
        title: "Dados Acionáveis",
        description: "Dashboards que mostram o desempenho individual."
    },
    {
        id: 3,
        icon: IconIntegracao,
        alt: "Ícone de equipe ou usuários",
        title: "Integração Total",
        description: "Comunicação fluida entre coordenação e alunos."
    },
    {
        id: 4,
        icon: IconSeguranca,
        alt: "Ícone de escudo de segurança",
        title: "Segurança Robusta",
        description: "Dados protegidos com criptografia de ponta."
    }
]