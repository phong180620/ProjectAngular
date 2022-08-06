import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-qlsp',
    template: `
      <div>
          <div class="container">
              <div class="card">
                  <div class="card-header bg-dark text-white">Thêm sản phẩm</div>
                  <div class="card-body">
                    <div calss="form-group">
                      <p>Mã sản phẩm</p>
                      <input class="form-control" [(ngModel)]="SanPhamNew.maSanPham"/>
                    </div>
                    <div calss="form-group">
                      <p>Tên sản phẩm</p>
                      <input class="form-control"[(ngModel)]="SanPhamNew.tenSanPham"/>
                    </div>
                    <div calss="form-group">
                      <p>Giá sản phẩm</p>
                      <input class="form-control" [(ngModel)]="SanPhamNew.gia"/>
                    </div>
                  </div>
                  <div class="card-footer text-left">
                      <button class="btn btn-outline-danger" (click)="ThemSanPham()" >Thêm sản phẩm</button>
                  </div>
              </div>
          </div>
          <div class="card mt-2">
            <div class="card-header bg-dark text-white font-weith-bold">Danh sách sản phẩm</div>
            <table class="table">
              <thead>
                <tr  >
                  <th>Mã sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr [ngClass]="{'bg-primary':(index+1)%2==0,'bg-success':(index+1)%2 != 0}" *ngFor="let SanPham of mangSanPham; let index=index">
                  <td>{{SanPham.maSanPham}}</td>
                  <td><img src={{SanPham.hinhAnh}} width="50px" height="50px"  alt="..."></td>
                  <td>{{SanPham.tenSanPham}}</td>
                  <td>{{SanPham.gia}}</td>
                </tr>

              </tbody>

            </table>
          </div>


      </div>

  `
    ,

    styles: [
        `
            .mau-chu{
              color:red
            }
            .font-chu{
              font-size:25px
            }

          `

    ]
})

export class BaiTapQLSPComponent implements OnInit {

    /*
    1.RENDER san pham ra giao dien
    2.Hiển thị xen kẻ màu săc giữa các dòng sản phẩm
    3.xây dựng chức năng sản phẩm
  
  
    */
    SanPhamNew: SanPham = { maSanPham: "", tenSanPham: '', gia: 0, hinhAnh: "" }
    mangSanPham: SanPham[] = [
        { maSanPham: "1", tenSanPham: "AAA", hinhAnh: "https://i.pravatar.cc?u=AAA", gia: 1000 },
        { maSanPham: "2", tenSanPham: "BBB", hinhAnh: "https://i.pravatar.cc?u=BBB", gia: 2000 },
        { maSanPham: "3", tenSanPham: "CCC", hinhAnh: "https://i.pravatar.cc?u=CCC", gia: 3000 },
        { maSanPham: "4", tenSanPham: "DDD", hinhAnh: "https://i.pravatar.cc?u=DDD", gia: 4000 }
    ]

    ThemSanPham() {

        // this.SanPhamNew.hinhAnh = `https://i.pravatar.cc?u=${this.SanPhamNew.tenSanPham}`
        let SanPhamMoi = { ...this.SanPhamNew, hinhAnh: `https://i.pravatar.cc?u=${this.SanPhamNew.tenSanPham}` }

        this.mangSanPham.push(SanPhamMoi)


    }

    constructor() { }

    ngOnInit() { }
}

interface SanPham {
    maSanPham: string;
    tenSanPham: string;
    hinhAnh: string;
    gia: number
}
