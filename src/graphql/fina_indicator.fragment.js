import gql from 'graphql-tag';

const FINA_INDICATOR_FRAGMENT = gql`
  fragment FinaIndicatorFragment on FinaIndicator {
    id
    symbol
    annDate
    endDate
    eps
    dtEps
    totalRevenuePs
    revenuePs
    capitalResePs
    surplusResePs
    undistProfitPs
    extraItem
    profitDedt
    grossMargin
    currentRatio
    quickRatio
    cashRatio
    invturnDays
    arturnDays
    invTurn
    arTurn
    caTurn
    faTurn
    assetsTurn
    opIncome
    valuechangeIncome
    interstIncome
    daa
    ebit
    ebitda
    fcff
    fcfe
    currentExint
    noncurrentExint
    interestdebt
    netdebt
    tangibleAsset
    workingCapital
    networkingCapital
    investCapital
    retainedEarnings
    diluted2Eps
    bps
    ocfps
    retainedps
    cfps
    ebitPs
    fcffPs
    fcfePs
    netprofitMargin
    grossprofitMargin
    cogsOfSales
    expenseOfSales
    profitToGr
    saleexpToGr
    adminexpOfGr
    finaexpOfGr
    impaiTtm
    gcOfGr
    opOfGr
    ebitOfGr
    roe
    roeWaa
    roeDt
    roa
    npta
    roic
    roeYearly
    roa2Yearly
    roeAvg
    opincomeOfEbt
    investincomeOfEbt
    nOpProfitOfEbt
    taxToEbt
    dtprofitToProfit
    salescashToOr
    ocfToOr
    ocfToOpincome
    capitalizedToDa
    debtToAssets
    assetsToEqt
    dpAssetsToEqt
    caToAssets
    ncaToAssets
    tbassetsToTotalassets
    intToTalcap
    eqtToTalcapital
    currentdebtToDebt
    longdebToDebt
    ocfToShortdebt
    debtToEqt
    eqtToDebt
    eqtToInterestdebt
    tangibleassetToDebt
    tangassetToIntdebt
    tangibleassetToNetdebt
    ocfToDebt
    ocfToInterestdebt
    ocfToNetdebt
    ebitToInterest
    longdebtToWorkingcapital
    ebitdaToDebt
    turnDays
    roaYearly
    roaDp
    fixedAssets
    profitPrefinExp
    nonOpProfit
    opToEbt
    nopToEbt
    ocfToProfit
    cashToLiqdebt
    cashToLiqdebtWithinterest
    opToLiqdebt
    opToDebt
    roicYearly
    totalFaTrun
    profitToOp
    qOpincome
    qInvestincome
    qDtprofit
    qEps
    qNetprofitMargin
    qGsprofitMargin
    qExpToSales
    qProfitToGr
    qSaleexpToGr
    qAdminexpToGr
    qFinaexpToGr
    qImpairToGrTtm
    qGcToGr
    qOpToGr
    qRoe
    qDtRoe
    qNpta
    qOpincomeToEbt
    qInvestincomeToEbt
    qDtprofitToProfit
    qSalescashToOr
    qOcfToSales
    qOcfToOr
    basicEpsYoy
    dtEpsYoy
    cfpsYoy
    opYoy
    ebtYoy
    netprofitYoy
    dtNetprofitYoy
    ocfYoy
    roeYoy
    bpsYoy
    assetsYoy
    eqtYoy
    trYoy
    orYoy
    qGrYoy
    qGrQoq
    qSalesYoy
    qSalesQoq
    qOpYoy
    qOpQoq
    qProfitYoy
    qProfitQoq
    qNetprofitYoy
    qNetprofitQoq
    equityYoy
    rdExp
    updateFlag
 }
 
`
export default FINA_INDICATOR_FRAGMENT;