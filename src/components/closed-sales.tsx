export const ClosedSales = () => {
  return (
    <div className="box sell grid">
        <div className="top text-center">Vendas fechadas</div>
        <div className="middle">
          <svg viewBox="0 0 232 232" className="porcentagem2">
            <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
            <circle
              cx="50%"
              cy="50%"
              r="98.5"
              stroke="url(#paint0_linear_201_85)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_201_85"
                x1="-9"
                y1="82"
                x2="145"
                y2="178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CE9FFC" />
                <stop offset="1" stop-color="#7367F0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="content">
            <h3>70%</h3>
            <p>alcançada</p>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <span>Esperado</span>
            <span>100</span>
          </div>
          <div className="item">
            <span
            className="closed-sales"
            >
              Alcançado</span
            >
            <span>70</span>
          </div>
        </div>
      </div>
  )
}