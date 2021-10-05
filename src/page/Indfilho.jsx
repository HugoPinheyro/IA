import React from 'react'


export default props => {
const geravalor = () => parseInt(Math.random() * (20)) + 50
const vertrue = () => Math.random() > 0.5

   return (
      <div>
           <div style={{background:'dodgerblue'}}>
              <div>ilho</div>
               <button onClick={
                function (e) {
                    props.quandoKlicar('elle', geravalor(), vertrue());


                }
              }>infoss</button>

          </div>
      </div>

  )
}
