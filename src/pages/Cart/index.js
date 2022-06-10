import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return ( 
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://m.media-amazon.com/images/I/81qj3mfR-CL._AC_SX695_.jpg" alt="Tênis" />
            </td>
            <td>
              <strong>Tênis muito bom</strong>
              <span>R$ 205,90</span>
            </td>
            <td>
              <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="blue" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="button">
                <MdAddCircleOutline size={20} color="blue" />
              </button>
              </div>
            </td>
            <td>
              <strong>R$411,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="blue"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>  
    </Container>
)
}

