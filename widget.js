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
                    .search-icon {
                        margin-top: 5px;
                        pointer-events: none;
                        color: var( #003f7f);
                        vertical-align: text-top;
                        }             
                    
                    input.text {width:80%;height:40px;padding:6px 12px;line-height:1.42857143;/*background-image:none;*/border:none;border-radius:none;border-bottom:1px solid #ccc;}
                    
                    input[type=search] {-webkit-appearance:textfield;}

                    input, textarea, select {border:1px solid #ccc;font-size:1em;padding:3px;margin:0;vertical-align:middle;}

                    .button {display:block;padding:10px;margin:.75em auto;width:15rem;background: #003f7f;color:#fff;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}
                `
                snippet = document.currentScript.innerHTML

                const wdg = document.createElement("div");
                wdg.innerHTML = `
                    <head>
                        <title>Search</title>
                        <meta name="description" content="Recipe Search Function">
                        <style>${style}</style>
                    </head>

                    <form action="search.php" class="search-form" id="search-form" method="GET" role="search">
                        <svg aria-hidden="true" class="search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path></svg>
                        <input class="text icon-search" type="search" id="q" name="q" maxlength="75" autofocus placeholder="Enter keyword, name, or title..."/>
                        <input class="button" type="submit" value="Search" />                
                    </form>
                `
                wdg.script = document.createElement("script")
                wdg.script.setAttribute('type', 'text/javascript');
                wdg.script.appendChild(document.createTextNode(`
                    const sqlite3 = require('sqlite3');

                    const db = new sqlite3.Database('./docs.db');
                    console.log(db.get(SELECT * FROM documents);
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
