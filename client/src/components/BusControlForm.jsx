import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  background-color: ${({ theme: { colours: { bus } } }) => bus};
  padding: 12px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: fixed;
  z-index: 1;
  bottom: ${({ theme: { navbar: { height, units } } }) => `${height}${units}`};
`

const InputLabel = styled.label`
  color: white;
  font-size: 1rem;
  line-height: 1.15rem;

  white-space: nowrap;

  margin-right: 12px;
`

const StopCodeInput = styled.input`
  background: transparent;
  outline: none;
  padding-bottom: 3px;
  margin-left: auto;

  width: 15vw;

  font-size: 1rem;

  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  color: white;

  transition: .3s all ease-in-out;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

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
        <InputLabel htmlFor="#stopCode">5-Digit Stop Code</InputLabel>
        <StopCodeInput type="number" name="stopCode" id="stopCode" onChange={this.handleChange} />
      </StyledForm>
    )
  }
}

export default BusControlForm
