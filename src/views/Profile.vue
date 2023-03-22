<template>
    <div dir="rtl" class="container">
        <div class="main-body">  
          <div class="row gutters-sm">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      class="rounded-circle"
                      width="200"
                    />
                    <div class="mt-3">
                      <h4>BNMA NEWS</h4>
                      <!-- <button class="btn btn-primary" style="margin-right: 5px;">Follow</button>
                      <button class="btn btn-outline-primary" style="margin-left: 5px;">Message</button> -->
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">الأسم الكامل</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">BNMA NEWS</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">البريد الإلكتروني</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">user@bnmanews.org</div>
                  </div>
                  <hr />
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">رقم الهاتف</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">(320) 380-4539</div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">العنوان</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Palestine, Gaza, baytlahia
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <router-link class="btn btn-primary" to="/editProfile" >نعديل</router-link>
                      <!-- <a
                      class="btn btn-primary"
                        target="__blank"
                        href="/editProfile"
                        >Edit</a
                      > -->
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">
                        <i class="material-icons text-info mr-2">assignment</i
                        >Project Status
                      </h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 55%"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 66%"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">
                        <i class="material-icons text-info mr-2">assignment</i
                        >Project Status
                      </h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 55%"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style="width: 66%"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name: "ProfileView",
    data(){
        return{
            profileView:{
                
            }
        }
    }
}
</script>