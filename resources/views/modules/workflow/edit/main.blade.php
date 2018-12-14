@extends('uccello::modules.default.edit.main')

@section('other-blocks')
<div class="card block">
	<div class="header">
		<h2>
			<div class="block-label-with-icon">

				{{-- Icon --}}
				<i class="material-icons">compare_arrows</i>

				{{-- Label --}}
				<span>{{ uctrans($module->name . '.single', $module) }}</span>
			</div>
		</h2>
	</div>
    <div class="body">
        <div class="row">
            <div class="col-md-12">
                <div id="paper">

				</div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="actionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form accept-charset="UTF-8" class="edit-form">
          <div class="btn-group bootstrap-select form-control show-tick">
            <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Action" aria-expanded="false">
              <span class="filter-option pull-left">Action</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span>
            </button>

            <div class="dropdown-menu open">
              <ul class="dropdown-menu inner" role="menu" >
                <li data-original-index="0" class="selected">
                  <a tabindex="0" class="" style="" data-tokens="null"></a>
                </li>
              </ul>
            </div>

            <select class="form-control show-tick">
              <option value=""></option>
            </select>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Label">
            </div>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Settings">
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="conditionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form accept-charset="UTF-8" class="edit-form">
          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Label">
            </div>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Conditions">
            </div>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Field">
            </div>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Key">
            </div>
          </div>

          <div class="form-group form-float">
            <div class="form-line">
              <input type="text" class="form-control" placeholder="Value">
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="valueConditionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Field to control
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
@endsection

@section('extra-content')
	Coucou
@endsection

@section('extra-script')
    {{ Html::script('vendor/uccello/workflow-designer/js/autoloader.js') }}
@endsection