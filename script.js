

    var customKey = "custom_name";
    var paramValue = "param_value";
    var pairsCount = 30;


    for(var i = 1; i <= pairsCount; i++){

        var custom_type = 'freeText';
        var param_type = 'tmParam';
        var custom_name = customKey + '_' + i;
        var param_name =  paramValue + '_' + i;

        if (custom_name.length > 0 && $(":.fieldName[value='" + name + "']").val() == undefined) {

            var div = $('<div class="fieldWrapper" id="fieldwrapper' + fieldCount + 1 + '">');
            var nameHidden = $('<input class="fieldName" type="hidden" id="fieldName-' + fieldCount + '" name="fieldName[' + fieldCount + ']">').val(custom_name);
            //    div.append(name);
            div.append('<div class="fieldName fieldsField">Add <input id="fieldTypeDisabled-' + fieldCount + '" style="width:' + ((custom_name.length + 4) * 7.3) + 'px" readonly="readonly" class="macro" value="[%' + custom_name + '%]"/> as a placeholder of type \'' + 'Free Text (will be quoted)' + '\' in the above tag code</div>');
            div.append(nameHidden);
            var typeHidden = $('<input class="fieldType" type="hidden" id="fieldType-' + fieldCount + '" name="fieldType[' + fieldCount + ']">').val(custom_type);
            div.append(typeHidden);
            var remove = $('<input type="button" class="button removeField" value="Remove"/>');
            remove.click(function () {
                $(this).parent().remove();
            });
            div.append(remove);

            //    div.append('<div class="fieldType fieldsField">'+type+'</div>');
            div.hide();
            $('#addFieldWrapper').append(div);
            div.show('slow');
            $('#fieldTypeDisabled-' + fieldCount).click(function (e) {
                this.select();
            }).click();
            fieldCount++;
            console.log(fieldCount);
        }

        if (param_name.length > 0 && $(":.fieldName[value='" + name + "']").val() == undefined) {

            var div = $('<div class="fieldWrapper" id="fieldwrapper' + fieldCount + 1 + '">');
            var nameHidden = $('<input class="fieldName" type="hidden" id="fieldName-' + fieldCount + '" name="fieldName[' + fieldCount + ']">').val(param_name);
            //    div.append(name);
            div.append('<div class="fieldName fieldsField">Add <input id="fieldTypeDisabled-' + fieldCount + '" style="width:' + ((param_name.length + 4) * 7.3) + 'px" readonly="readonly" class="macro" value="[%' + param_name + '%]"/> as a placeholder of type \'' + 'TagMan Param' + '\' in the above tag code</div>');
            div.append(nameHidden);
            var typeHidden = $('<input class="fieldType" type="hidden" id="fieldType-' + fieldCount + '" name="fieldType[' + fieldCount + ']">').val(param_type);
            div.append(typeHidden);
            var remove = $('<input type="button" class="button removeField" value="Remove"/>');
            remove.click(function () {
                $(this).parent().remove();
            });
            div.append(remove);

            //    div.append('<div class="fieldType fieldsField">'+type+'</div>');
            div.hide();
            $('#addFieldWrapper').append(div);
            div.show('slow');
            $('#fieldTypeDisabled-' + fieldCount).click(function (e) {
                this.select();
            }).click();
            fieldCount++;
            console.log(fieldCount);
        }
    }


