export const SalesPerDay = () => {
  return (
    <div className="box weekly-sell grid">
        <div className="top">Vendas por dia da semana</div>

        <div className="wrapper">
          <div className="left grid">
            <div className="most-sell grid">
              <span>Dia com mais vendas</span>
              quarta-feira
            </div>
            <div className="less-sell grid">
              <span>Dia com menos vendas</span>
              domingo
            </div>
          </div>
          <div className="right">
            <div className="bars">
              <div className="bar-wrapper">
                <div className="bar bar-nivel1"></div>
                <span>dom</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel2"></div>
                <span>seg</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel3"></div>
                <span>ter</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel4"></div>
                <span>qua</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel5"></div>
                <span>qui</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel6"></div>
                <span>sex</span>
              </div>
              <div className="bar-wrapper">
                <div className="bar bar-nivel7"></div>
                <span>sab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}