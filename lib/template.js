module.exports = {
  HTML:function(body){
    return `
      <!doctype html>
      <html>
      <head>
        <title>효준's 다이어리</title>
        <meta charset='utf-8'>
      </head>
      <body>
        <h1><a href='/'>효준's 다이어리</a></h1>
        ${body}
        <button type='button' onclick="location.href='/create'">글쓰기</button>
      </body>
      </html>
    `;
  },list:function(filelist){
    var list = `
      <table border='1'>
        <thead>
          <tr>
            <th>날짜</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
    `;
    var i = 0;
    while(i < filelist.length){
      list = list + '<tr>';
      list = list + `<td><a href="/detail/${filelist[i].id}">${filelist[i].date}</a></td>`;
      list = list + `<td><a href="/detail/${filelist[i].id}">${filelist[i].title}</a></td>`;
      list = list + `<td><a href="/detail/${filelist[i].id}">${filelist[i].user_id}</a></td>`;
      list = list + '</tr>';
      i = i + 1;
    }
    list = list + `
        </tbody>
      </table>
    `;
    return list;
  },detail:function(row){
    var body = `
      <table border='1'>
        <tr>
          <th>제목</th>
          <td>${row[0].title}</td>
        </tr>
        <tr>
          <th>내용</th>
          <td>${row[0].description}</td>
        </tr>
      </table>
      <button type='button' onclick="location.href='/update/${row[0].id}'">수정</button>
      <button type='button' onclick="location.href='/delete/${row[0].id}'">삭제</button>
    `;
    return body;
  },create:function(){
    var body = `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="제목"></p>
        <p>
          <textarea name="description" placeholder="내용"></textarea>
        </p>
        <p><input type="submit"></p>
      </form>
    `;
    return body;
  },update:function(post){
    var body = `
      <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${post[0].id}">
        <p>
          <input type="text" name="title" placeholder="title" value="${post[0].title}">
        </p>
        <p>
          <textarea name="description" placeholder="description">${post[0].description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `;
    return body;
  }
}
