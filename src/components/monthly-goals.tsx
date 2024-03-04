export const MonthlyGoals = () => {
  return (
    <div className="box target grid">
      <div className="top text-center">Meta mensal</div>
      <div className="middle">
        <svg viewBox="0 0 232 232" className="porcentagem1">
          <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
          <circle
            cx="50%"
            cy="50%"
            r="98.5"
            stroke="url(#paint0_linear_201_104)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_104"
              x1="0.5"
              y1="82"
              x2="154.842"
              y2="178.702"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DF9780" />
              <stop offset="1" stop-color="#A66DE9" />
            </linearGradient>
          </defs>
        </svg>

        <div className="content">
          <h3>90%</h3>
          <p>alcançada</p>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <span>Esperado</span>
          <span>R$ 70K</span>
        </div>
        <div className="item">
          <span
            className="monthly-goals"
          >Alcançado</span
          >
          <span>R$ 63K</span>
        </div>
      </div>
    </div>
  )
}