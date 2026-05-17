<template>
  <section id="about" class="section section-alt">
    <div class="container">
      <h2 class="section-title">關於 <span>我</span></h2>
      <p class="section-subtitle">自我介紹與個人資料</p>
      <div class="about-grid">
        <div class="about-bio">
          <p>
            我對資訊技術的興趣始於高職時期，修習計算機概論與電子邏輯閘等課程，並在教育部智慧機器人輪型競速自走車比賽中榮獲<strong>高職組第 3 名</strong>。
          </p>
          <p>
            大學期間初次接觸網頁設計，使用 Adobe Dreamweaver 自學 HTML、CSS，並取得 <strong>Adobe 國際證書</strong>。
          </p>
          <p>
            畢業後加入 Toyota 擔任專員，學習如何與團隊有效溝通、從客戶角度思考問題。後參加<strong>資展國際前端工程師養成班（57 屆）</strong>，擔任小組組長，負責會議主導、進度控管、技術指導與人力分配。
          </p>
          <p>
            正式進入軟體業後，於現職擔任前端工程師，參與多項金融業系統開發，包括應收帳款系統、網路銀行、無障礙網銀及無障礙匯利率官方網站等，主要以 Angular、React 進行開發，採前後端分離架構協作。
          </p>
          <p>
            我特別重視程式結構的可讀性與維護性，並關注使用者體驗與無障礙設計，期望讓產品在功能與易用性上都能達到良好品質。
          </p>
        </div>
        <div class="about-info">
          <h3 class="info-title">個人資料</h3>
          <table class="info-table">
            <tr>
              <th>性別</th>
              <td>男</td>
            </tr>
            <tr>
              <th>年齡</th>
              <td>28 歲</td>
            </tr>
            <tr>
              <th>役畢</th>
              <td>2018 / 07</td>
            </tr>
            <tr>
              <th>就業狀態</th>
              <td><span class="status-badge">在職中</span></td>
            </tr>
            <tr>
              <th>工作年資</th>
              <td>7 ~ 8 年</td>
            </tr>
            <tr>
              <th>希望職稱</th>
              <td>前端工程師</td>
            </tr>
            <tr>
              <th>希望地點</th>
              <td>台北市、新北市、桃園市<br>新竹縣市、台中市</td>
            </tr>
            <tr>
              <th>遠端工作</th>
              <td>有意願</td>
            </tr>
            <tr>
              <th>可上班日</th>
              <td>錄取後一個月</td>
            </tr>
            <tr>
              <th>駕照</th>
              <td>普通重型機車、普通小型車</td>
            </tr>
            <tr>
              <th>語言</th>
              <td>中文（母語）、英文（略懂）、台語（略懂）</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
  align-items: start;
}

.about-bio p {
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.85;
  font-size: 0.95rem;
}

.about-bio p:last-child {
  margin-bottom: 0;
}

.about-bio strong {
  color: #1e293b;
  font-weight: 600;
}

.info-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e2e8f0;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table tr {
  border-bottom: 1px solid #f1f5f9;
}

.info-table th {
  text-align: left;
  padding: 10px 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: #94a3b8;
  width: 90px;
  vertical-align: top;
  padding-right: 12px;
}

.info-table td {
  padding: 10px 0;
  font-size: 0.88rem;
  color: #334155;
  vertical-align: top;
}

.status-badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.12);
  color: #0ea5e9;
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 2px 10px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
