<template>
  <div class="row">
    <form action="/" method="post" id="uploadForm" enctype="multipart/form-data">
      <div>附件上传</div>

      <div class="file-box">
        <van-icon name="plus"/>
        <input
          type="file"
          id="files"
          class="file-btn"
          name="files"
          accept="image/x-png, image/gif, image/jpeg, image/bmp"
          placeholder="file"
          multiple
          @change="tirggerFile($event)"
        />
      </div>
    </form>
    <hr>
    <ul class="upload-list">
      <li v-for="(file,index) in fileList" :key="index" class="upload-list-li">
        <a class="upload-list-li-name">
          <i class="fa fa-file-text-o" aria-hidden="true"></i>
          {{file.name}}
        </a>
        <label class="upload-list-li-label" @click="deleFile(index,file.name)">
          <i class="fa fa-close"></i>
        </label>
      </li>
    </ul>
    <hr>
  </div>
</template>
<script type="text/javascript">
  // import {TripService} from "../service/index";

  export default {
    name: "uploadFile",
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      tirggerFile(event) {
        var list = event.target.files;
        var _this = this;
        let fileData = new FormData()
        fileData.append("file", event.target.files[0]);
        console.log(fileData)
        // TripService.fileUpload(fileData).then(res => {
        //   console.log(res);
        // });

        for (var i = 0; i < list.length; i++) {
          if (_this.fileList.length >= 5) {
            _this.common.showAlert("最多上传5个文件！");
            return false;
          } else {
            _this.fileList.push(list[i]);
          }
        }
      },
      deleFile(i, name) {
        this.fileList.splice(i, 1);
      }
      // uploadFil() {
      //   var _this = this;
      //   var formData = new formData();
      //   for (var i = 0; i < this.fileList.length; i++) {
      //     _this.formData.append("file", this.fileList[i]);
      //   }
      //   $.ajax({
      //     url: "http://localhost:8080/Pictures",
      //     type: "POST",
      //     data: formData,
      //     async: false,
      //     cache: false,
      //     contentType: false,
      //     processData: false,
      //     beforeSend: function(xhr) {
      //       xhr.setRequestHeader("tok", token);
      //     },
      //     success: function(data) {
      //       console.log(JSON.stringify(data));
      //     },
      //     error: function(data) {
      //       console.log(JSON.stringify(data));
      //     }
      //   });
      // }
    }
  };
</script>
<style scoped>
  .upload-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .upload-list-li {
    position: relative;
    width: 100%;
    height: 0.44rem;
    margin-top: 5px;
    line-height: 0.44rem;
    background: #fff;
    padding: 0.3rem 0.2rem;
    display: flex;
    align-items: center;
  }

  .upload-list-li:hover {
    background-color: #f5f7fa;
  }

  .upload-list-li-name {
    position: relative;
    margin-right: 40px;
    display: block;
  }

  .fa-file-text-o {
    margin-right: 7px;
  }

  .upload-list-li-label {
    position: absolute;
    right: 5px;
    top: 0;
  }

  #uploadForm {
    width: 100%;
    height: 0.44rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.44rem 0.2rem;
    align-items: center;
  }

  /* .file-box {
    padding: 5px 15px;
    border-radius: 3px;
    background-color: #409eff;
    border-color: #409eff;
    color: #000;
    display: inline-block;
    position: relative;
  } */
  .file-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    background-color: transparent;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
  }
</style>