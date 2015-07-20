var getSubmit = document.getElementById('submito');
getSubmit.onclick = function() {
    var fourmTabs = [];

    chrome.tabs.query({}, function(tabs) {

        var message,validate = document.getElementsByTagName('input');

        message = document.getElementById('message');


        fourmTabs[0] = tabs[0];
        var custom_name_input = document.getElementById('custom_name').value;
        var param_name_input = document.getElementById('param_value').value;
        var pairCount = document.getElementById('pairs').value;

        var keySubstring = custom_name_input.substr(0,6);
        var paramSubstring = param_name_input.substr(0,5);
        console.log(keySubstring);
        console.log(paramSubstring);

        if(keySubstring == '' && paramSubstring == '' && pairCount == ''){

            validate[0].style.border = 'solid red 2px';
            validate[1].style.border = 'solid red 2px';
            validate[2].style.border = 'solid red 2px';
            message.innerHTML = "All Fields Are Required";
        }
        else if(keySubstring != 'custom' && paramSubstring != 'param'){

            message.innerHTML = 'Please provide correct names for key and value.Key name must start with word `custom`,and value with `param`!';
            validate[0].style.border = 'solid red 2px';
            validate[1].style.border = 'solid red 2px';
            validate[2].style.border = 'none';

        }else if(isNaN(pairCount)){
            message.innerHTML = 'This field must be number';
            validate[0].style.border = 'none';
            validate[1].style.border = 'none';
            validate[2].style.border = 'solid red 2px';
        }
        else{
            message.innerHTML = '';
            validate[0].style.border = 'none';
            validate[1].style.border = 'none';
            validate[2].style.border = 'none';

            window.fieldSet = "var fieldCount = 1;for(i = 1; i <= " + pairCount + "; i++){var custom_type = 'freeText';var param_type = 'tmParam';var custom_name = '" + custom_name_input + "' + '_' + i;var param_name = '" + param_name_input + "' \+ '_' + i;if (custom_name.length > 0 && $(\":.fieldName[value='\" + name + \"']\").val() == undefined) {var div = $('<div class=\"fieldWrapper\" id=\"fieldwrapper' + fieldCount + 1 + '\">');var nameHidden = $('<input class=\"fieldName\" type=\"hidden\" id=\"fieldName-' + fieldCount + '\" name=\"fieldName[' + fieldCount + ']\">').val(custom_name);div.append('<div class=\"fieldName fieldsField\">Add <input id=\"fieldTypeDisabled-' + fieldCount + '\" style=\"width:' + ((custom_name.length + 4) * 7.3) + 'px\" readonly=\"readonly\" class=\"macro\" value=\"[%' + custom_name + '%]\"/> as a placeholder of type \"' + '\"Free Text (will be quoted)' + ' in the above tag code</div>');div.append(nameHidden);var typeHidden = $('<input class=\"fieldType\" type=\"hidden\" id=\"fieldType-' + fieldCount + '\" name=\"fieldType[' + fieldCount + ']\">').val(custom_type);div.append(typeHidden);var remove = $('<input type=\"button\" class=\"button removeField\" value=\"Remove\"/>');remove.click(function () {$(this).parent().remove();});div.append(remove);div.hide();$('#addFieldWrapper').append(div);div.show('slow');$('#fieldTypeDisabled-' + fieldCount).click(function (e) {this.select();}).click();fieldCount++;}if (param_name.length > 0 && $(\":.fieldName[value='\" + name + \"']\").val() == undefined) {var div = $('<div class=\"fieldWrapper\" id=\"fieldwrapper' + fieldCount + 1 + '\">');var nameHidden = $('<input class=\"fieldName\" type=\"hidden\" id=\"fieldName-' + fieldCount + '\" name=\"fieldName[' + fieldCount + ']\">').val(param_name);div.append('<div class=\"fieldName fieldsField\">Add <input id=\"fieldTypeDisabled-' + fieldCount + '\" style=\"width:' + ((param_name.length + 4) * 7.3) + 'px\" readonly=\"readonly\" class=\"macro\" value=\"[%' + param_name + '%]\"/> as a placeholder of type \"' + '\"TagMan Param' + ' in the above tag code</div>');div.append(nameHidden);var typeHidden = $('<input class=\"fieldType\" type=\"hidden\" id=\"fieldType-' + fieldCount + '\" name=\"fieldType[' + fieldCount + ']\">').val(param_type);div.append(typeHidden);var remove = $('<input type=\"button\" class=\"button removeField\" value=\"Remove\"/>');remove.click(function () {$(this).parent().remove();});div.append(remove);div.hide();$('#addFieldWrapper').append(div);div.show('slow');$('#fieldTypeDisabled-' + fieldCount).click(function (e) {this.select();}).click();fieldCount++;}}";
            chrome.tabs.executeScript(null, {file: "jquery-2.1.4.min.js"}, function () {
                chrome.tabs.executeScript({
                    code: window.fieldSet
                });
            });

            var displayDiv = document.getElementById('yeahmotherfucker');
            var closePrevius = document.getElementById('wrapper');
            closePrevius.style.display = 'none';
            displayDiv.style.display = 'block';

            setTimeout(function () {
                window.close();
            }, 3000);
        }
    })
};



