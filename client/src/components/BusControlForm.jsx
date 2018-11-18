import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  background-color: ${({ theme: { colours: { bus } } }) => bus};
  padding: 12px;
  width: 100%;

  position: fixed;
  bottom: ${({ theme: { navbar: { height, units } } }) => `${height}${units}`};
`

const StopCodeInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 5rem;
  padding-bottom: 6px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  color: white;

  transition: .3s all ease-in-out;

  &:focus {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    transition: .3s all ease-in-out;
  }
`

class BusControlForm extends PureComponent {
  updateTimeoutId = null

  constructor(props) {
    super(props)

    this.state = {
      stopCode: null,
    }
  }

  handleChange = (e) => {
    const { setStopCode } = this.props

    e.persist()

    const updatedStopCode = e.target.value === '' ? null : e.target.value

    clearTimeout(this.updateTimeoutId)

    this.setState({ stopCode: updatedStopCode }, () => {
      const { stopCode } = this.state

      this.updateTimeoutId = setTimeout(() => {
        setStopCode(stopCode)

        if ((stopCode !== null) && (stopCode.length === 5)) {
          e.target.blur()
        }
      }, 1000)
    })
  }

  render() {
    return (
      <StyledForm>
        <StopCodeInput type="number" name="stopCode" placeholder="5-digit stop code" onChange={this.handleChange} />
      </StyledForm>
    )
  }
}

export default BusControlForm
