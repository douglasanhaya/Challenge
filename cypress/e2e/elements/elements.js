class Elements {


  btnLogin = () => {
    return "#header-nav-bar > ul > li.nav-item.u-header__nav-last-item.nav-item > a > button";
  };

  aceitarCookies = () => {
    return "#onetrust-accept-btn-handler";
  }

  btnVerVagasHome = () => {
    return "#header-nav-bar > ul > li:nth-child(1) > a";
  };

  btnBlog = () => {
    return "#header-nav-bar > ul > li:nth-child(2) > a";
  };

  primeiraEmpresaListagemVagas = () => {
    return "#content > div > div:nth-child(3) > div:nth-child(1) > a > div.p-3 > div.d-lg-flex.justify-content-between.px-2.row > div.d-flex.align-items-center.pr-0.col-xl-5.col-lg-6 > div.pr-4.mb-3.mr-1.pt-1 > ul > li:nth-child(1) > span ";
  };

  searchVagas = () => {
    return "#content > div > div.bg-primary > form > div > div.mb-4.mb-lg-0.col-lg-7 > div > input";
  };

  btnBuscar = () => {
    return "#content > div > div.bg-primary > form > div > div.align-self-lg-end.col-lg-2 > button";
  };

  btnTenhoInteresse = () => {
    return "#content > div > div:nth-child(1) > div > div.d-none.d-lg-block.col > div > div:nth-child(2) > div > nav > div.row > div:nth-child(8) > div > button";
  };


  btnVisualizarDetalheVaga = () => {
    return "#content > div > div:nth-child(3) > div:nth-child(1) > a > div.p-3 > div.d-lg-flex.justify-content-between.px-2.row > div.d-flex.align-items-center.pr-0.col-xl-5.col-lg-6 > div.u-lg-avatar.position-relative.mb-3.mr-4 > div > img";
  };

  inputNomeCadVaga = () => {
    return "#displayName";
  };



}

export default Elements;