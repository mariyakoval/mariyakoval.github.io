---
title: Investment Portfolio Analysis 
date: 2025-12-03
publication_types: ["article"]
tags:
  - React
  - JavaScript
  - Vercel
---

Analysis of a mixed-risk investment portfolio designed to capture high-growth opportunities in technology, defense, and commodities while stabilizing returns with diversified equities and bonds.

<!--more-->

**Authors: Mariia Koval, Terrence Wu, Anahi Lugo**

## 1. Introduction

The portfolio aims to allocate to higher-risk securities to maximize returns while maintaining a balance between higher- and lower-risk assets. The high-risk assets include Rheinmetall ADR (RNMBY), SPDR S&P Metals & Mining ETF (XME), Nvidia Corp. (NVDA), and Vanguard Growth ETF (VUG), which provide exposure to defense, commodities, and high-growth technology – the industries with high potential returns but elevated volatility. To offset this, the lower-risk portion combines the Vanguard Total Stock Market ETF (VTI), a Portfolio Aggregate Bond ETF (SPAB), and a US Treasury Bond ETF (GOVT), which stabilizes returns by providing steady cash flows, lower volatility, and broader market exposure. High-performing growth opportunities and diversified income-producing assets enable the portfolio to capture strong long-term appreciation while mitigating the impact of market fluctuations.

The six chosen securities and their summary (Figure 1):
- **Stocks**: RNMBY, NVDA
- **Equity ETFs**: VTI, XME
- **Mutual fund**: VUG
- **Bond ETFs**: GOVT, SPAB

## 2. Individual Asset Analysis

### 2.1 OTCMKTS: RNMBY Rheinmetall ADR, German Defense Company. 

**Company Overview**

The reasoning behind investing in Rheinmetall is that, first of all, as an international company, it reduces the systematic risks found in companies in the US stock market. Based in the largest economy in Europe, Germany is more likely to remain stable in the event of a US recession. Additionally, the defense industry in general typically works counter to systemic risks, as they tend to rise during moments of political strife.

- Prices have risen sharply following the outbreak of the Ukraine War and Germany’s commitment to increase defense spending sharply, and Europe is generally moving away from dependency on the US defense industry.
- Stock Price: (12/1 Open) $335.87 

**Financial Analysis**

| Metric                        | 2020   | 2021   | 2022    | 2023    | 2024    |
|--------------------------------|--------|--------|---------|---------|---------|
| EPS                            | €0.63  | €6.72  | €10.93  | €12.32  | €16.51  |
| Net Income                     | €256M  | €391M  | €468M   | €579M   | €804M   |
| Total Assets                    | €7.27B | €7.73B | €8.28B  | €11.94B | €14.67B |
| Revenue                         | €5.41B | €5.66B | €6.41B  | €7.18B  | €9.75B  |
| Efficiency (asset turnover ratio)| 0.8x   | 0.75x  | 0.8x    | 0.71x   | 0.78x   |
| Solvency Ratio                  | 4.3%   | 10.3%  | 14.3%   | 10.5%   | 11.3%   |
| Liquidity (current ratio)       | 1.5x   | 1.49x  | 1.41x   | 1.3x    | 1.21x   |
| Profitability (net profit margin)| 4.7%  | 6.9%   | 7.3%    | 8.1%    | 8.2%    |

The asset turnover ratio is slightly lower than that of US competitors like Northrop Grumman and General Dynamics, significantly lower than Lockheed Martin, and significantly higher than Boeing. Generally, the financial situation is improving and is considered average among peers in the defense industry, but with significantly stronger asset and revenue growth over the last few years, driven by Germany’s plans for remilitarization and dramatically increased defense spending.

**Two-Stage FCFF:**

The FCFF valuation model was used to estimate the intrinsic value of Rheinmetall ADR by projecting the cash flows to all capital providers and discounting them at the firm’s weighted average cost of capital. The valuation uses FCFF2024 = €988M, a WACC of 8.1%, a long-term growth rate of 0.04, and a high-growth assumption of 30%. The firm’s capital structure reflects €2.5B in debt, no preferred equity, and 230.01M shares outstanding. To estimate the intrinsic share price using an [Excel sheet](https://docs.google.com/spreadsheets/d/1rK-g3XaOLardD2n-ko5DUzrmXoW96VJH5Kn2IsPw9Rk/edit?usp=sharing), we projected the cash flow forward using a high-growth rate for the first five years, followed by a stable-growth rate. Each year’s projected FCFF was discounted back at the firm’s WACC to get its present value, and a terminal value was calculated to obtain all cash flow beyond the explicit forecast period. The firm value was found by adding the discounted cash flows, from which we subtracted the market value of debt to find the equity value. Lastly, dividing the equity value by the number of shares yielded the intrinsic value per share of €301.83, or approximately $352. This result indicated that the company is fairly priced.

![Portfolio Chart](/fcff.png)

**PEG Ratio Analysis:**

PEG ratio = (Share price / EPS) / EPS growth rate.
EPS growth rate is estimated by analysts to be 42.5% for the next 5 years, with last year’s EPS growing by 26%.
(335.87 / 18.82) / 42.5 = 0.42 when using the 2024 EPS of $18.82. This is a low PEG ratio, and suggests that the stock is quite undervalued, which is also supported by our FCFF fair price valuation.

### 2.2 NYSE: NVDA, Nvidia Corp.

**Company Overview**

- Less risky than investing in AI companies directly; extremely high market dominance (94%) for GPUs, data processing, and other chips necessary for computing technologies.
- Stock price: (12/1 Open) $174.76

**Financial Analysis**

| Metric                           | 2020    | 2021    | 2022    | 2023    | 2024     |
|----------------------------------|---------|---------|---------|---------|----------|
| EPS                              | 0.18    | 0.39    | 0.18    | 1.21    | 2.97     |
| Net Income                        | 4.33B   | 9.75B   | 4.37B   | 29.76B  | 72.88B   |
| Total Assets                       | 28.79B  | 44.19B  | 41.18B  | 65.73B  | 111.6B   |
| Revenue                            | 16.68B  | 26.91B  | 26.97B  | 60.92B  | 130.5B   |
| Efficiency (asset turnover ratio)  | 0.7x    | 0.72x   | 0.74x   | 0.83x   | 1.17x    |
| Solvency Ratio                     | 62.2%   | 45.6%   | 62.2%   | 31%     | 137.4%   |
| Liquidity (current ratio)          | 7.67x   | 4.09x   | 6.65x   | 3.52x   | 4.17x    |
| Profitability (net profit margin) | 25.6%   | 26%     | 36.2%   | 16.2%   | 48.9%    |

Even though the stock is valued very high and fairly risky, it makes up for it by having extremely high revenue, net income, and EPS growth in the last few years. With almost zero dividend payout, most of those earnings are being reinvested, which indicates potential for even more capacity and scale growth in the future. The very high current ratio also signifies that the company is in very good financial health.

**Two-Stage FCFF:**

The FCFF valuation model was used to estimate the intrinsic value of Nvidia by projecting the cash flows to all capital providers and discounting them at the firm’s weighted average cost of capital. The valuation uses FCFF2024 = $60.85B, a WACC of 9%, a long-term growth rate of 0.04, and a high-growth assumption of 35%. The firm’s capital structure reflects $10.59B in debt, no preferred equity, and 24.3B shares outstanding. The intrinsic share price was estimated using an [Excel sheet](https://docs.google.com/spreadsheets/d/1rK-g3XaOLardD2n-ko5DUzrmXoW96VJH5Kn2IsPw9Rk/edit?usp=sharing) and yielded the intrinsic value per share of $176.25. This result indicated that the company is fairly priced.

![Portfolio Chart](/fcff.png)

**Peg Ratio Analysis:**

PEG ratio = (Share price / EPS) / EPS growth rate
EPS growth rate is estimated by analysts to be 75.2% for the next 5 years, with last year’s EPS growing by 59%.
(174.76 / 2.94) / 75.2 = 0.79. This PEG ratio is a positive sign that the stock remains somewhat undervalued, as it falls below the benchmark of 1.

### 2.3 VTI: Vanguard Total Stock Market ETF

VTI is an exchange-traded fund that tracks the CRSP US Total Stock Market index, providing exposure to the entire US equity market, including large, mid, and small-cap companies across different sectors. It is one of the most diversified ETFs, making it an appealing long-term investment.
The P/E ratio of around 27.5 indicates that US equities are valued at a slight premium relative to historical averages; however, their valuation is supported by strong profitability among larger holdings and the global development of US capital markets. In the short term, VTI delivered an 8.27% quarter-end return and a 14.29% year-to-date (YTD) return, indicating solid recent market performance. VTI produced a 17.35% 1-year return, a 24.04% 3-year annualized return, and a 15.65% 5-year annualized return. With a Sharpe ratio of 1.25 and a Sortino ratio of 2.09, the ETF exhibits strong risk-adjusted performance, as its volatility is well-compensated by its returns. During market downturns, VTI tracks the overall market, but its diversification helps mitigate risks. As long as the US economy continues to grow, VTI is positioned to capture the growth efficiently. The expense ratio for this ETF is 0.03, and its net asset value is $332.13. A significant portion of this ETF is allocated to the technology sector.

### 2.4 XME: State Street SPDR S&P Metals & Mining ETF

XME is an exchange-traded fund that invests in materials equity and tracks the performance of US companies engaged in global mining, extraction, or production of diversified metals. Fund’s holdings include steel (35.9%), Coal and Consumable Fuels (19.04%), Gold (14.72%), Diversified Metals and Mining (11.24%), Aluminium (9.36%), Silver (5.78%). This allocation can be a positive sign in the view of rising infrastructure spending, global growth, and a rise in commodity prices. Metals often become hedges because if inflation rises, commodity prices can benefit, especially when the US dollar declines, but they could face significant regulatory and ESG pressures. 

Given a beta of 1.29, the ETF is more volatile than the market and is expected to move 1.29% with every 1% change in the market, significantly amplifying risk and return. According to Seeking Alpha, XME has a P/E ratio of ~25, which suggests that investors are willing to pay more for each dollar of earnings. However, this also increases risk, as if earnings disappoint, the multiple can decrease significantly. According to the SSGA factsheet, the estimated 3-5 year EPS growth is 22.26%. This is a high expected growth rate, which may be an indicator of rising optimism regarding profits and demand in the mining sector. Total return from last year was 32.78%, including dividends. Since the fund’s inception, the average annual return has been 4.94%. According to Portfolio’s Lab, XME’s 1-year Sharpe ratio is 1.06, indicating that this investment provides a return that adequately compensates for its associated risk. Sortino ratio of 1.6, indicating strong risk-adjusted returns relative to an investment's downside risk.

### 2.5 VUG: Vanguard Growth ETF

VUG is an exchange-traded fund that invests in large-cap US growth stocks and tracks the performance of the CRSP US Total Stock Market index.  Over 60% of the ETF’s top holdings are in tech stocks, and a third are in market leaders Nvidia, Microsoft, and Apple, which add strength thanks to their stable cash flows and leadership in AI, cloud computing, and consumer technology. This concentration has been a major driver of the fund’s performance, as the large-cap tech sector has experienced one of the strongest bull markets in history over the last decade.

VUG has a beta of 1.05, which is slightly higher than the overall market but appears moderate considering the high-growth nature of its underlying holdings. The P/E ratio is around 30, indicating a growth ETF and the willingness to pay a premium for future earnings expansion. At the same time, it increases vulnerability to rising interest rates or macroeconomic shocks. Over the past 10 years, the average return was 17.4%, outperforming the US market. As long as the trend in digitalization, software development, and cloud adoption continues to grow, this ETF is set for long-term appreciation. Sharpe and Sortino ratings of 1.59 and 2.69, respectively, show that VUG has shown strong returns after accounting for volatility. Overall, this ETF offers an opportunity to gain exposure to the US growth segment, particularly in the technology sector. The low expense ratio of just 0.04%, combined with strong historical performance and transformative companies, makes it an attractive option for long-term appreciation. 

### 2.6 GOVT: iShares US Treasury Bond ETF

The iShares U.S. Treasury Bond ETF (GOVT) is a low-risk, passively managed bond ETF that seeks to track the U.S. Treasury bond index. Over 90% of their investments are U.S. Treasury Securities. Due to the low-risk nature of U.S. securities, we believe this ETF is a safe investment.

GOVT has an annual expense ratio of 0.05%, which is significantly lower than the average for U.S. government bond treasury ETFs, which typically have an expense ratio of 0.22%. This is beneficial for long-term returns, as fees will not erode net returns. Its net asset value is $23.30. Its current market price as of December 1st is $23.10, so the bond ETF is selling at a fair value. The yield to maturity is 3.41%. This is a significantly lower yield to maturity than high-yield bond ETFs, primarily due to GOVT's holdings in U.S. treasuries. The iShares U.S. Treasury Bond ETF has a beta of 0.88, indicating a moderately positive correlation with the market. This means that this asset is cyclical, and its returns will be similar to those of the market. 

### 2.7 SPDR Portfolio Aggregate Bond ETF (SPAB)

The SPDR Portfolio Aggregate Bond ETF (SPAB) is a passively managed bond ETF that seeks to track the total return of the Bloomberg US Aggregate Bond Index. The majority of its holdings are investment-grade bonds with a credit rating of AA. Almost half of the bonds they invest in are government bonds, with the rest being corporate and securitized bonds. This bond has an expense ratio of 0.03%, which is extremely attractive when compared to other multi-sector bonds, which have expense ratios of 0.51%. The net asset value of this bond ETF is $26.07. Its current market price is $25.81 as of December 1st, indicating that the bond ETF is relatively fairly valued. The yield to maturity is 3.88%, which reflects the lower risk associated with investing in investment-grade bonds. This bond ETF has a beta of 1.00, indicating that it has perfect market correlation. 

## 3. Portfolio Performance Analysis

We are quite happy with the results from the correlation matrix (Figure 2). Our riskiest investments, the two stocks, have almost zero linear correlation, indicating that we have effectively diversified our stock choices. Specifically, Rheinmetall serves as a valuable diversification from all our other ETF and Bond choices, having almost no correlation with any other investments. As expected, the ETFs and Bonds do have higher levels of correlation due to shared systematic risks. The significantly lower risks of the bonds and ETFs, as well as the built-in diversification, mean that we are less worried about high correlation amongst those assets. 

For our three portfolios, we are all incorporating the same seven investments, but in very different distributions. Our reasoning is that first, our research has already proven that these assets all have good potential for growth and have relations in such a way as to reduce systematic and unsystematic risks. Secondly, by adjusting the distribution of funds, we can easily rebalance the portfolio whenever necessary, based on the market’s performance and outlook. This allows for greater flexibility, such as the ability to shift from the base portfolio to the low-risk portfolio immediately after hearing news of a potentially oncoming recession.

### 3.1 Base Portfolio

The base portfolio strikes a balance between risk and return. Higher weights were dedicated to stocks with the strongest fundamentals, as RNMBY and NVDA exhibit strong 5-year growth, solid profitability metrics, and lower correlations with U.S. market indices. Moderate weights were assigned to broad and growth-oriented equity ETFs, as both VTI and VUG offer extensive coverage of the large-cap market and capture long-term U.S. equity growth. Smaller weights were assigned to bond ETFs, SPAB and GOVT, to add credit exposure and income stability. XME was included at 10% to provide exposure to commodity-linked equities, which can perform well during inflationary or industrial expansion cycles. Suitable for normal economic conditions, with relatively stable inflation and interest rates. $10,000 invested in 2015 would yield $160,496 by Nov 2025 (adjusted for inflation).

![Base Chart](/base.png)

### 3.2 Low Risk Portfolio

The portfolio aims to minimize both the standard deviation (9.0%) and the drawdown (16.9%), reducing losses during periods of economic uncertainty. As such, the portfolio holds a significantly higher proportion of bonds, which provide a low-volatility source of cash flow. Suitable for recessions, when the economy is experiencing slower growth or contractions. Short-term interest rates are expected to fall after inflation peaks and starts to decline, benefiting bond prices. $10,000 invested in 2015 yields $25,378 by Nov 2025 (adjusted for inflation).

![Low Chart](/low.png)

### 3.3 High Risk Portfolio

The distribution of assets has been adjusted to achieve the maximum return percentage. Positions in ETFs and bonds have been reduced in favor of stocks. As a result, this portfolio is likely to experience higher risks during periods of economic instability, but reap larger earnings during periods of economic expansion as a tradeoff. In effect, this serves as the opposite role to the low-risk portfolio and can be rebalanced during times of predicted economic expansion and growth to maximize earnings. Inflation is expected to increase slowly, and interest rates are expected to increase; therefore, this portfolio reduces bond holdings. $10,000 invested in 2015 would yield $411,328 by 2025 (adjusted for inflation).

![Risk Chart](/high.png)

### 3.4 Synthesized Analysis of Portfolios

These graphs and tables illustrate the scale of the risks, returns, and other performance metrics of the three portfolios over the past decade, with the SPDR S&P 500 serving as the benchmark. Both the base and the high-risk portfolios outperform the benchmark considerably, with the high-risk portfolio netting in an ending sum of (inflation-adjusted) $411,328 by Nov 30, 2025, despite losing over $80,000 from its peak since Sep 30, 2025 (Figure 4). Over the past decade, the high-growth portfolio has performed exceptionally well and may also be suitable for investors who have an appetite for risk, can withstand potential losses during periods of financial hardship, and have an optimistic outlook for the long-term prospects of the stock market and global financial system. On the other hand, it has also experienced the most volatility, suffering a 30% drawdown twice in the past decade and surpassing the 20% drawdown marker four times (Figure 6). The coefficient of variation is 50.10%. 
27.89 (Standard Deviation)/55.67 (Arithmetic Annual Mean) = 0.50098 x 100= 50.098%. It means that for every unit of return, there are about 0.5 units of risk; thus, it is fairly volatile. The CAPM analysis revealed that the portfolio is undervalued, under the assumptions of a 0.04 risk-free rate, market return of 0.12, and expected return of 0.502. 

![CAPM](/capmhigh.png)

The base portfolio still performed very well, with an ending sum of $160,495. Interestingly, the beta and gain/loss ratio of the growth portfolio are not significantly higher than the base portfolio, despite having an ending balance over twice the base portfolio (Figure 7). It is still significantly less risky than the high-risk portfolio, which may have more visible downsides in the event of a financial crisis or an event such as the popping of the AI bubble. Trailing returns indicate medium-term momentum, with 60.94 (3-yr) and 44.67% (5-yr) total returns showing that the portfolio compounds effectively over longer horizons. The 44.96% 1-yr return highlights solid recent performance, while the annualized volatility shows a balanced profile relative to the achieved return (Figure 5). The coefficient of variation is 52.78%. 20.80 (Standard Deviation)/39.41 (Arithmetic Annual Mean) = 0.52778 x 100= 52.778%. It means that for every unit of return, there are about 0.53 units of risk; thus, it is fairly volatile. The CAPM analysis revealed that the portfolio is undervalued, under the assumptions of a 0.04 risk-free rate, market return of 0.12, and expected return of 0.366. 

![CAPM](/capmbase.png)

The low-risk portfolio’s growth over the past 10 years actually slightly falls below the S&P500, with an ending sum of $25,378. It has still managed to return more than double the original investment, adjusted for inflation. Trailing returns remain stable and predictable, with 21.42% (3-yr) and 14% (5-yr) total returns reflecting its conservative strategy (Figure 5). However, in exchange, it has also experienced significantly less drawdown percentage than even the S&P benchmark in periods such as early 2019 and late 2022. Thus, this portfolio would be useful in times of predicted recession or financial volatility as a temporary shelter, rather than a long-term portfolio for growth. For reference, the benchmark’s ending sum is $26,737. The coefficient of variation is 65.18%. 9.04 (Standard Deviation)/13.87 (Arithmetic Annual Mean) = 0.65176 x 100= 65.176%. It means that for every unit of return, there are about 0.65 units of risk; thus, it is fairly volatile. The CAPM analysis revealed that the portfolio is undervalued, under the assumptions of a 0.04 risk-free rate, market return of 0.12, and expected return of 0.134. 

![CAPM](/capmlow.png)

## 4. Future Performance

The forecast table shows the expected 1-year return ranges for each portfolio, based on their annualized returns() and annualized standard deviations () (Figure 7). The Base Portfolio has an expected return of 36.6% with a 68% chance that the return falls between 15.8% and 57.4%, reflecting a balance between high growth and moderate risk. The Low Risk portfolio offers a more conservative profile with expected returns of 13.42% and a range of 4.38% to 22.46%. The High Risk portfolio targets maximum growth, with an expected return of 50.20% and a wider range from 22.31% to 78.09%, indicating higher volatility. For comparison, the S&P 500 ETF shows the expected returns of 14.85% and a range from -0.29% to 29.99%. These ranges represent approximately 68% confidence intervals, meaning returns are likely to fall within them about two-thirds of the time. 

| Portfolio   | Expected 1-year Return | Standard Deviation | Lower Bound | Upper Bound |
|------------|----------------------|-----------------|------------|------------|
| Base       | 36.6%                | 20.8%           | 15.8%      | 57.4%      |
| Low Risk   | 13.42%               | 9.04%            | 4.38%      | 22.46%     |
| High Risk  | 50.2%                | 27.89%           | 22.31%     | 78.09%     |


Based on historical metrics, the portfolios are expected to deliver a range of returns that reflect their respective risk profiles. The Base Portfolio offers strong growth potential with moderate volatility. The High Risk Portfolio targets maximum growth, capturing more upside in strong markets but experiencing larger drawdowns in downturns. In contrast, the low-risk portfolio prioritizes stability, demonstrating resilience to market swings. All portfolios exhibit attractive risk-adjusted performance, with Sharpe ratios exceeding 1.2 and Sortino ratios surpassing 2, indicating an efficient balance of risk and return. The benchmark correlations for the base portfolio, low-risk portfolio, and high-risk portfolio are 0.67, 0.79, and 0.55, respectively. Thus, portfolio performance may not move in tandem with the market. For instance, a low-risk portfolio has less diversification benefit, while a high-risk portfolio has the most independence from market swings.

## 5. Portfolio Risk Assessment

Some potential risks can impact portfolio performance, including:

- 1. Equity market risk (VTI, XME, VUG)

     VTI, XME, and VUG are susceptible to equity market loss due to the nature of their investments. VTI seeks to match the returns of the entire U.S. market; therefore, because it has holdings in businesses across all industries, it is susceptible to overall equity market risk. While XME is more specialized, it also carries equity market risk, as the demand for industrial materials is heavily dependent on the overall market's performance. VUG focuses on high-growth stocks; however, generally, these stocks are more sensitive to market changes than value stocks. Therefore, if the market experiences negative performance, then this investment will be susceptible to equity market risk. 

- 2. Interest rate risk (GOVT/ SPAB)

      Even though GOVT and SPAB are low-yield bonds, which means that the value of these bond ETFs could decrease significantly in the event of an increase in market interest rates. Both bonds invest primarily in both short and long-term bonds, which means they are slightly less susceptible to market interest rate fluctuations than other ETFs with exclusively long-term bonds.

- 3. Geopolitical risk (Rheinmetall is defense-related)

      RNMBY is heavily dependent on geopolitical events, as the company’s primary business is supplying military supplies to NATO countries. The company could be targeted or blacklisted by its customers’ rival nations due to its affiliation with them. Therefore, if there were to be a reduction in military government spending or an anti-militarization movement in the EU, then the company’s performance could be negatively impacted. RNMBY’s risk, however, runs counter to the typical geopolitical risk, which usually decreases investor confidence in the market and thus will likely lead to bear markets, resulting in lower stock and ETF prices.

- 4. Commodity sensitivity (XME mining ETF)

      Because XME holds a significant portion of its assets in raw materials such as coal and steel, this ETF is vulnerable to commodity price fluctuations. This is because if the prices of coal and steel were to drop suddenly, then the ETF’s underlying holdings would be negatively affected in terms of performance.

**Alignment with Investment Profile**

For our low-risk portfolio, which we would implement during times of economic downturn and recession, we wanted to reduce equity market risk as we believed that investments with high equity market risk would experience the most significant decrease in value. Therefore, we reduced the weight of stocks and bonds in our portfolio and increased the weight of bonds to 75%. This is also because we do not expect market interest rates to be very high during economic downturns; therefore, the bonds are not at a great interest rate risk. In this portfolio, we aimed to reduce our most significant risk and invest in safer investments. 

For our base portfolio, we sought to strike a balance between risk and return; therefore, we have a split of 40% stocks, 40% ETFs, and 20% bonds. This was mainly due to the fact that we are targeting higher returns while still diversifying across high and low-risk investments. We believed that the risk of commodity sensitivity and equity market risks for our stocks and ETFs was lower under a relatively normal-performing economy; therefore, we increased the weights of these investments. We also recognized that our bonds would be at a greater risk of interest rate risk and would offer lower returns if the market were to increase at a normal rate; hence, we decreased the weight of the bond ETFs. 

For our high-risk portfolio, we primarily sought high returns; therefore, we wanted to invest in assets with high return metrics, which were primarily our stocks. We distributed our weightings as follows: 65% stocks, 25% ETFs, and 10% bonds. Under a best-case scenario portfolio, the economy would be rapidly growing; therefore, we knew that our bonds would be at the greatest risk for market interest rate risk, and we minimized our holdings in bonds. We also believed that our investments, which were sensitive to commodities and had equity market risk,
would perform well in a rapidly growing market; therefore, we maintained high holdings in stocks and ETFs.

<h2 align="center"><strong>References</strong></h2>

1. “iShares U.S. Treasury Bond ETF (GOVT).” Yahoo! Finance, Yahoo!, 1 Dec. 2025, https://finance.yahoo.com/quote/GOVT/holdings/.
2. “iShares U.S. Treasury Bond ETF.” Fund Analyzer, 1 Dec. 2025, https://tools.finra.org/fund_analyzer/report?selected=NDY0MjlCMjY3.
3. “NVIDIA Corp (NVDA) Discount Rate - WACC & Cost of Equity.” 2025. Alphaspread.com, https://www.alphaspread.com/security/nasdaq/nvda/discount-rate/1000.
4. “NVDA | NVIDIA Corp. Annual Cash Flow Statement.” n.d. MarketWatch, https://www.marketwatch.com/investing/stock/nvda/financials/cash-flow.
5. “RNMBY | Rheinmetall AG ADR Annual Balance Sheet | MarketWatch.” 2025. MarketWatch, 2 Dec. 2025, https://www.marketwatch.com/investing/stock/rnmby/financials/balance-sheet.
6. 1 SPDR® S&P® Metals & Mining Etf Fact Sheet Equity as of 09/30/2025, www.ssga.com/library-content/products/factsheets/etfs/us/factsheet-us-en-xme.pdf. Accessed 26 Nov. 2025.
7. “SPDR S&P Metals and Mining ETF (XME) Stock Price, News, Quote & History.” Yahoo! Finance, Yahoo!, 26 Nov. 2025, https://finance.yahoo.com/quote/XME/?guccounter=1.
8. “SPDR Portfolio Aggregate Bond ETF (SPAB).” Yahoo! Finance, Yahoo!, 1 Dec. 2025, https://finance.yahoo.com/quote/SPAB/.
9. “State Street® SPDR® Port Aggt Bd ETF SPAB.” Morningstar, 1 Dec. 2025, https://www.morningstar.com/etfs/arcx/spab/portfolio.
10. “State Street® SPDR® Portfolio Aggregate Bond ETF.” Fund Analyzer, 1 Dec. 2025, https://tools.finra.org/fund_analyzer/report?selected=Nzg0NjRBNjQ5.
11. “Total Stock Market ETF.” Vanguard, institutional.vanguard.com/investments/product-details/fund/0970. Accessed 26 Nov. 2025.
12. Vanguard Growth Index Fund ETF Shares (VUG) Price, Quote, News & Analysis | Seeking Alpha, seekingalpha.com/symbol/VUG. Accessed 26 Nov. 2025.
13. “Vug-Vanguard Growth ETF.” Vanguard, investor.vanguard.com/investment-products/etfs/profile/vug. Accessed 26 Nov. 2025.
14. “XME: State Street® SPDR® S&P® Metals & Mining ETF.” State Street Investment Management, www.ssga.com/us/en/intermediary/etfs/state-street-spdr-sp-metals-mining-etf-xme. Accessed 26 Nov. 2025.

<h2 align="center"><strong>Appendix</strong></h2>

*Figure 1: Asset Summary Table*

| Name                                     | Ticker | Type             | Region      | Sector                  | Reason for selection                                                                 |
|------------------------------------------|--------|-----------------|------------|------------------------|------------------------------------------------------------------------------------|
| Rheinmetall AG                            | RNMBY  | Stock           | Europe (Germany) | Defense/industrials    | Low correlation with U.S equity indices; strong growth due to defense spending.    |
| Nvidia                                    | NVDA   | Stock           | U.S.       | Tech                    | High-growth tech leader; offers significant upside potential.                     |
| Vanguard Total Stock Market ETF           | VTI    | ETF (equity)    | U.S.       | Broad U.S. market       | Core market exposure; low-cost diversified benchmark.                              |
| State Street SPDR S&P Metals & Mining ETF | XME    | ETF (equity)    | U.S.       | Materials/Mining        | Commodity exposure; higher risk and return.                                        |
| Vanguard Growth ETF                        | VUG    | Mutual fund / ETF | U.S.     | Growth Equities         | Represents high-growth sectors; captures innovation-driven returns.               |
| iShares US Treasury Bond ETF              | GOVT   | ETF (Bond)      | U.S.       | US Treasury Bond        | U.S. Treasury bond ETF offering capital preservation.                              |
| State Street SPDR Port Aggt Bd ETF        | SPAB   | ETF (Bond)      | U.S.       | Bond                    | Broad investment-grade bond ETF providing stable income.                            |

*Figure 2: Correlation Matrix*

![Corr matrix](/corrmatrix.png)

*Figure 3: Annual Returns by Portfolio Type*

![Returns](/returns.png)

*Figure 4: Growth by Portfolio Type*

![Growth](/growth.png)

*Figure 5: Trailing Returns by Portfolio Type*

![treturns](/treturns.png)

*Figure 6: Drawdowns Returns by Portfolio Type*

![Drawdowns](/drawdowns.png)

*Figure 7: Risk and Return Metrics*

![Risk and Return](/riskret.png)





