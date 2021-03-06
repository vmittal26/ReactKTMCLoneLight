import getClosestElement from "./getClosestElement";
export function onToggleSelectAllCheckBox(isChecked:boolean) {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:not([role="selectAll"])');

  Array.prototype.forEach.call(checkboxes,(checkbox: any) => {
    if (isChecked) {
      let row = getClosestElement(checkbox, "rt-tr");
      checkbox.checked = isChecked;
      row.classList.add('rowColorHighlight');
    }
    else {
      let row = getClosestElement(checkbox, "rt-tr");
      checkbox.checked = isChecked;
      row.classList.remove('rowColorHighlight');
    }
  });
}
export function deselectAllCheckbox(){

  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  Array.prototype.forEach.call(checkboxes,(checkbox: any)=>{
    if (checkbox.checked) {
      let row = getClosestElement(checkbox, "rt-tr");
      checkbox.checked = false;
      row.classList.remove('rowColorHighlight');
    }
  });
}