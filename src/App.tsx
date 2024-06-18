import ButtonWithTooltip from './ButtonWithTooltip';
function App() {
  return (
    <div className="App">
      <ButtonWithTooltip tooltipContent={
        <div>
          asdfasdfasdfasdfasdfa
          <br />
          234123421412341234124
          <br />
          adfaerqewasdfasdfasfa
        </div>
      }>
        带提示的按钮
      </ButtonWithTooltip>

      <div style={{ height: 50 }} />

      <ButtonWithTooltip style={{marginTop: '20px', marginLeft: '200px'}} tooltipContent={
        <div>
          asdfasdfasdfasdfasdfa
          <br />
          234123421412341234124
          <br />
          adfaerqewasdfasdfasfa
        </div>
      }>
        带提示的按钮2
      </ButtonWithTooltip>
    </div>
  );
}

export default App;
