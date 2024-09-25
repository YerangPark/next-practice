interface Portfolio {
  id: number
  file_name: string
}

export interface DashboardProps {
  data: PortfolioBrief[];
  onHover: (portfoil: Portfolio) => void
  openDeletePortfolioModal: () => void
  handleExport: () => void
}

export interface PortfolioBrief {
  id: number;
  file_name: string;
  updated_at: string;
  image: string | null;
}