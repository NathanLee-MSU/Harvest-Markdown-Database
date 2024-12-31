(function createWidget() {
    const Widget = Object.create({
        create(id){
            const style = `
                    :root {
                        --base-color: #585858;
                        --dark-color: #003f7f;
                        --light-color: #fff;
                        --link-color: #09589a;
                        --success-color: #f0f8f1;
                        --warning-color: #fbeeec;
                        --spacing: 16px;
                    }
                    .widgetContainer {
                        display: flex;
                        flex-direction: row;
                    }
                    
                    .buttonAndInput {
                        display: flex;
                        flex-direction: column;
                    }

                    .search-icon {
                        margin-top: 5px;
                        pointer-events: none;
                        color: var( #003f7f);
                        vertical-align: text-top;
                    }
                    
                    .logFrame {
                        border:1px solid #999999; margin:2px; padding:3px;
                        flex: 1 0;
                    }
                    
                    input.text {width:80%;height:40px;padding:6px 12px;line-height:1.42857143;/*background-image:none;*/border:none;border-radius:none;border-bottom:1px solid #ccc;}
                    
                    input[type=search] {-webkit-appearance:textfield;}

                    input, textarea, select {border:1px solid #ccc;font-size:1em;padding:3px;margin:0;vertical-align:middle;}

                    .button {display:block;padding:10px;margin:.75em auto;width:15rem;background: #003f7f;color:#fff;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}
                `
                snippet = document.currentScript.innerHTML

                const wdg = document.createElement("div");
                wdg.innerHTML = `
                    <script src='https://lovasoa.github.io/sql.js/js/sql.js'></script>
                    <head>
                        <title>Search</title>
                        <meta name="description" content="Recipe Search Function">
                        <style>${style}</style>
                    </head>

                    <body>
                        <div class="widgetContainer">
                            <div class="buttonAndInput">
                                <textarea class="text icon-search" type="search" id="q" name="q" maxlength="75" autofocus placeholder="Enter keyword, name, or title..."></textarea>
                                <button id='safe' class='button'>Search</button>
                            </div>
                        <div class='logFrame'></div>
                        </div>
                    </body>
                `

                wdg.script = document.createElement("script");
                wdg.script.setAttribute('type', 'text/javascript');
                wdg.script.appendChild(document.createTextNode(`
                    var script = document.createElement('script');
                        script.type = 'text/javascript';

                        script.src = 'https://lovasoa.github.io/sql.js/js/sql.js';
                        document.body.appendChild(script);

                    function loadBinaryFile(path,success) {
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", path, true); 
                        xhr.responseType = "arraybuffer";
                        xhr.onload = function() {
                            var data = new Uint8Array(xhr.response);
                            var arr = new Array();
                            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                            success(arr.join(""));
                        };
                        xhr.send();
                    };
                    loadBinaryFile('https://cdn.jsdelivr.net/gh/NathanLee-MSU/Harvest-Markdown-Database/docs.db', function(data){
                        var sqldb = new SQL.Database(data);
                        // Database is ready
                        var res = sqldb.exec("SELECT * FROM documents");
                        console.log(res);
                    });
                `/*Javascript code goes here*/))
                wdg.appendChild(wdg.script)
                return wdg;
        }
    });

    const id = `js${ Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`;

    const myWidgetInstance = Widget.create(id);

    document.write(`<div id= ${ id } ></div>`);
    document.getElementById(id).appendChild(myWidgetInstance);
})();
