import { Component, OnInit } from "@angular/core";
import { TablePage, TableData, TableRow, TableColumn } from "@pixelmon/pikachu";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-demo1",
  templateUrl: "./demo1.component.html",
  styleUrls: ["./demo1.component.less"]
})
export class Demo1Component implements OnInit {
  tableData: TableData = {
    data: [],
    totalSize: 0
  };
  queryParams = {};

  tableLoading = false;
  selections: TableRow[] = [];
  columns: TableColumn[] = [
    {
      title: "title1",
      field: "field1"
    },
    {
      title: "title2",
      field: "field2",
      type: "link"
    },
    {
      title: "title3",
      field: "field3"
    },
    {
      title: "title4",
      field: "field4"
    },
    {
      title: "title5",
      field: "field5",
      showSort: true
    },
    {
      title: "title6",
      field: "field6",
      showSort: true
    },
    {
      title: "图片",
      field: "pictures",
      type: "thumbnail"
    },
    {
      title: "操作",
      field: "operation"
    }
  ];

  validateForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      field1: [null],
      field2: [null],
      field3: [null]
    });
  }

  load(page: TablePage = { page: 1, size: 10 }) {
    this.tableData.totalSize = page.size;
    this.tableData.data = [];
    this.selections = [];
    for (let index = 0; index < this.tableData.totalSize; index++) {
      this.tableData.data.push({
        field1: "field1-" + index,
        field2: "field2-" + index,
        field3: "field3-" + index,
        field4: "field4-" + index,
        field5: "field5-" + index,
        field6: "field6-" + index,
        pictures: [
          "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",
          "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture"
        ]
      });
    }
    this.tableData.data = [...this.tableData.data];
    this.tableData = { ...this.tableData };
  }

  sort(sort: { field: string; sortValue: "descend" | "ascend" | null }) {
    // console.log(sort);
  }

  submitForm(): void {
    this.load();
  }
}
